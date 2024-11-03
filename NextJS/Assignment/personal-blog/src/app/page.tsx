import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
  export default function Home() { 
    return (
      <div className={`${roboto.className} bg-blue-500 min-h-screen`}>
        <header className="bg-blue-500 p-4 text-white flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Volk's Personal Blog </h1>
          <div className="flex space-x-4"> {/* Added flex container */}
          <button className=" hover:text-black text-2xl font-mono py-2 px-4 rounded-md">Tech Blogs</button>
          <button className=" hover:text-black text-2xl font-mono py-2 px-4 rounded-md">Traveling Blogs</button>
          <button className=" hover:text-black text-2xl font-mono py-2 px-4 rounded-md">Financial Blogs</button>
          </div>
        </header>   
        <main className="container mx-auto p-8 bg-blue-500">
          <section className="mb-8">    
            <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
            <p className="text-white">
              Welcome to my personal blog.  Here you can find my thoughts, experiences, and musings on various topics.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
            {/* Placeholder for recent posts */}
            <p className="text-white">
              (Coming soon!)
            </p>
          </section>
        </main>
        <footer className="bg-blue-800 text-white fixed bottom-0 w-full p-4 text-center">
          <p>© 2024 Volk's Personal Blog</p>
        </footer>
      </div>
    );
  }
