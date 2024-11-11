import { Raleway, Roboto_Mono } from 'next/font/google';
import Link from "next/link"; //
import Image from "next/image"; // Import the Image component from Next.js
import { type SanityDocument } from "next-sanity"; //
import  client  from "../../sanity/lib/client"; // Import the Sanity client
import imageUrlBuilder from '@sanity/image-url'; // Import the image URL builder
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; // Import the SanityImageSource type

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)  
]|order(publishedAt desc)[0...12]{_id, title, slug, "publishedAt": publishedAt, mainImage, "authorName": author->name}`;

const options = { next: { revalidate: 30 } };

// Create a URL builder instance
const builder = imageUrlBuilder(client); // Pass in the Sanity client

function urlFor(source: SanityImageSource) { // Define the urlFor function
  return builder.image(source); // Return the image URL
}

const fontA = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const fontB = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options); // Fetch posts
  const recentPost = posts[0];
  return (
    <main className="mx-auto bg-[#e0f2f7] min-h-screen p-10">
      <ul className="flex flex-wrap gap-6 justify-center">
        {recentPost && ( // Check if there is a recent post
          <li key={recentPost._id} className="w-[450px] flex-shrink-0">
            <Link href={`/${recentPost.slug.current}`}>
              <div className="flex flex-col justify-between h-full border bg-[#e5eef0] border-black rounded-lg overflow-hidden">
                <h2 className={`text-2xl p-4 ${fontA.className}`}>{recentPost.title}</h2>
                {recentPost.mainImage && (
                  <div className="h-[250px] overflow-hidden">
                    <Image
                      src={urlFor(recentPost.mainImage).url()} // Use the URL builder to get the image URL
                      alt={recentPost.title}
                      width={500} // Match the width of the container
                      height={250} // Set a fixed height
                      className="object-cover w-full h-full" // Ensure the image covers the container without distortion
                    />
                  </div>
                )}
                <div className={`flex justify-between p-4 ${fontB.className}`}>
                  <p>
                    {recentPost.publishedAt 
                      ? new Date(recentPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Date not available'}
                  </p>
                  <p className="text-right">
                    {recentPost.authorName || 'Author not available'}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </main>
  );
}



