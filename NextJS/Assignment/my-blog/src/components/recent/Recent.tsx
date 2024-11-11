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
]|order(publishedAt desc)[0...3]{_id, title, slug, "publishedAt": publishedAt, mainImage, "authorName": author->name}`;

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
  return (
    <main className="bg-[#e0f2f7] min-h-screen md:p-6">
      <ul className="flex flex-wrap gap-6 justify-center mx-auto md:justify-start md:flex-row" style={{ maxWidth: '1200px' }}>
        {posts.map((recentPost) => ( // Changed to map over the posts array
          <li key={recentPost._id} className="w-full sm:w-[450px] md:w-[calc(100%/3-1rem)] flex-shrink-0">
            <Link href={`/${recentPost.slug.current}`}>
              <div className="flex flex-col justify-start md:h-full border bg-[#e5eef0] border-black rounded-lg p-2">
                <h2 className={`text-xl p-2 ${fontA.className}`}>{recentPost.title}</h2>
                {recentPost.mainImage && (
                  <div className="h-[200px] md:h-[250px]">
                    <Image
                      src={urlFor(recentPost.mainImage).url()} // Use the URL builder to get the image URL
                      alt={recentPost.title}
                      width={400} // Match the width of the container
                      height={200} // Adjusted height for mobile
                      className="object-cover w-full h-full" // Ensure the image covers the container without distortion
                    />
                  </div>
                )}
                <div className={`flex flex-col md:flex-row justify-between p-2 ${fontB.className}`}>
                  <p className="text-center md:text-left">
                    {recentPost.publishedAt 
                      ? new Date(recentPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Date not available'}
                  </p>
                  <p className="text-center md:text-right">
                    {recentPost.authorName || 'Author not available'}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}



