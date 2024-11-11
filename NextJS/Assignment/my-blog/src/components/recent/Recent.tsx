import { Raleway, Roboto_Mono } from 'next/font/google';
import Link from "next/link"; 
import Image from "next/image"; 
import { type SanityDocument } from "next-sanity"; 
import  client  from "../../sanity/lib/client"; 
import imageUrlBuilder from '@sanity/image-url'; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types"; 

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)  
]|order(publishedAt desc)[0...3]{_id, title, slug, "publishedAt": publishedAt, mainImage, "authorName": author->name}`;

const options = { next: { revalidate: 30 } };

const builder = imageUrlBuilder(client); 

function urlFor(source: SanityImageSource) { 
  return builder.image(source); 
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
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options); 
  return (
    <main className="bg-[#e0f2f7] min-h-screen"> {/* Reduced padding */}
      <ul className="flex flex-wrap justify-center mx-auto md:justify-evenly md:flex-row" style={{ maxWidth: '1500px' }}>
        {posts.map((recentPost) => ( 
          <li key={recentPost._id} className="w-full sm:w-[450px] md:w-[calc(100%/3-1rem)] flex-shrink-0 p-6"> {/* Increased padding to p-6 */}
            <Link href={`/${recentPost.slug.current}`}>
              <div className="flex flex-col justify-start border bg-[#e5eef0] border-black rounded-lg p-2">
                <h2 className={`text-xl p-2 ${fontA.className}`}>{recentPost.title}</h2>
                {recentPost.mainImage && (
                  <div className="h-[250px] md:h-[200px]">
                    <Image
                      src={urlFor(recentPost.mainImage).url()} 
                      alt={recentPost.title}
                      width={450} 
                      height={300} 
                      className="object-cover w-full h-full" 
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
