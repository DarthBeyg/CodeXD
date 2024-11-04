import {Roboto} from 'next/font/google'

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
})
  export default function Home() { 
    return (
      <div className={`${font.className} bg-gray-600 min-h-screen`}> 
        <header className=" p-4 text-white flex flex-row justify-between items-center">
          <button className="hover:font-extrabold text-3xl ">Volk's Personal Blog </button>
          <div className="flex space-x-4"> {/* Added flex container */}
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Tech Blogs</button>
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Traveling Blogs</button>
          <button className=" hover:font-bold text-2xl  py-2 px-4 rounded-md">Financial Blogs</button>
          </div>
        </header>   
        <main className="container mx-auto p-8">
          <section className="mb-8">    
            <h2 className="text-2xl font-semibold mb-4 w-2/3">Hey there! I'm Volk – a code-slinging software engineer, who likes to
               dive in the market charts as I am debugging production systems..</h2>
            <p className="text-gray-100">
            During the day, I craft digital solutions that make the internet tick. By night, I'm analyzing market trends, hunting
            for the next big tech opportunity, or planning my next adventure across the globe. Yeah, I'm that guy who gets equally 
            excited about a perfectly executed trading strategy and a beautifully written piece of code. <br />
            Here's what to expect from this blog: <br />
            --Tales from the trenches of software development
            --My trading adventures (wins and face-palms included)
            --Tech deep-dives that won't put you to sleep
            --Travel stories that somehow connect back to tech and trading
            --Life hacks from someone who juggles multiple passions

Ready to join this wild ride? Let's explore where technology meets money meets wanderlust! 🚀
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
