import { GetStaticProps } from 'next';
import { Raleway, Roboto_Mono } from 'next/font/google';
import client from '../../sanity/lib/client';

const fontA = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
const fontB = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface Post {
  id: string;
  title: string;
  category: string;
}

interface RecentProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc)[0...2]{_id, title, category}`;
  const posts: Post[] = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

const Recent: React.FC<RecentProps> = ({ posts }) => {
  return (
    <section>
      <h2 className={`${fontA.className} text-xl md:text-2xl mb-4 text-[#232946]`}>Recent Posts</h2>
      <ul className={`${fontB.className} text-black list-disc pl-5`}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default Recent;