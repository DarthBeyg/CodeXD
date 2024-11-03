import {Roboto} from 'next/font/google'

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
})
  export default function Home() { 
    return (
      <div className={`${font.className} bg-gray-700 min-h-screen`}> 
        <header className="bg-gray-700 p-4 text-white flex flex-row justify-between items-center">
          <button className="hover:font-bold text-3xl ">Volk's Personal Blog </button>
          <div className="flex space-x-4"> {/* Added flex container */}
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Tech Blogs</button>
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Traveling Blogs</button>
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Financial Blogs</button>
          </div>
        </header>   
        <main className="container mx-auto p-8 bg-gray-700">
          <section className="mb-8">    
            <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
            <p className="text-gray-100">
              Welcome to my personal blog.  Here you can find my thoughts, experiences, and musings on various topics.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
            {/* Placeholder for recent posts */}
            <p className="text-gray-100">
              (Coming soon!)
            </p>
          </section>
        </main>
        <footer className="bg-gray-800 text-white fixed bottom-0 w-full p-4 text-center">
          <p>© 2024 Volk's Personal Blog</p>
        </footer>
      </div>
    );
  }
