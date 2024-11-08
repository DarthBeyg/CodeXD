import { Raleway, Nunito, Roboto_Mono, } from 'next/font/google' // Importing fonts
import Image from 'next/image' // Importing Image tag
import C from '../components/logos/c.svg' // Importing C logo
import Nextjs from '../components/logos/nextjs.svg' // Importing Nextjs logo
import Python from '../components/logos/python.svg' // Importing Python logo
import ReactIcon from '../components/logos/react.svg' // Importing React logo
import Node from '../components/logos/nodejs.svg' // Importing Nodejs logo
import TailwindL from '../components/logos/tailwind.svg' // Importing Tailwind logo
import TypescriptL from '../components/logos/typescript.svg' // Importing Typescript logo
import Logo from '../components/logos/html5.svg' // Importing Logo

const font = Nunito({ 
  weight: ['400',],
  subsets: ['latin'],
})
const fontA = Raleway({
  weight: ['400',],
  subsets: ['latin'],
})
const fontB = Roboto_Mono({
  weight: ['400',],
  subsets: ['latin'],
})

  export default function Home() { 
    return (
      <div className={`${font.className} bg-[rgb(50,241,248)] min-h-screen text-2xl`}> 
        <header className=" p-4 flex flex-row justify-between items-center">
          <button className="hover:font-extrabold text-3xl text-black motion-preset-slide-right motion-duration-2000 motion-delay-500">Volk's Personal Blog </button>
          <div className="flex space-x-4"> {/* Added flex container */}
          <button className="hover:font-bold text-black text-3xl font-medium py-2 px-4 rounded-md motion-preset-expand motion-duration-2000">Tech Blogs</button>
          <button className="hover:font-bold text-black text-3xl font-medium py-2 px-4 rounded-md motion-preset-expand motion-duration-2000">Traveling Blogs</button>
          <button className="hover:font-bold text-black text-3xl font-medium py-2 px-4 rounded-md motion-preset-expand motion-duration-2000">Financial Blogs</button>
          </div>
        </header>   
        <main className="container mx-auto p-8">
          <section className="mb-8 text-[rgb(255,255,255)]">    
            <div className="flex items-start mb-4">
              <div className="w-2/3 pr-8">
                <div className={`${fontA.className} text-2xl text-white font-medium text-justify mb-4`}>
                 <h2 className=''> Hey there! I'm Volk – a code-slinging Software Engineer, who likes to
                  dive in the market charts as I am debugging production systems..
                 </h2>
                </div>
                <p className={`${fontB.className} text-black font-normal text-2xl text-justify`}>
                  During the day, I craft digital solutions that make the businesses tick. By night, I'm analyzing market trends, hunting
                  for the next big tech opportunity, or planning my next adventure across the globe. Yeah, I'm that guy who gets equally 
                  excited about a perfectly executed trading strategy and a beautifully written piece of code.
                </p> <br />
                <p>Here's what to expect from this blog:</p>  
                <p className={`${fontB.className} text-2xl text-black`}>
                --Tales from the trenches of software development <br />
                --My trading adventures (wins and face-palms included) <br />
                --Tech deep-dives that won't put you to sleep <br />
                --Travel stories that somehow connect back to tech and trading <br />
                --Life hacks from someone who juggles multiple passions <br />            
                </p><br />
              </div>
              <div className="flex flex-col items-end"> {/* Added flex column container */}
                <Image src='/pfp/1.jpg' alt="Profile Picture" width={450} height={450} className="rounded-full motion-preset-pop motion-duration-2000 motion-delay-200" />
                <div className="flex flex-row gap-8 mt-8 mx-20"> {/* New container for logos */}
                  <Image src={C} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-75'/> 
                  <Image src={Python} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-125'/>
                  <Image src={Nextjs} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-150'/>
                  <Image src={ReactIcon} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-175'/>
                </div>
                <div className="flex flex-row gap-8 mt-10 mx-20"> {/* New container for logos */}
                  <Image src={Node} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-225'/> 
                  <Image src={TailwindL} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-100'/>
                  <Image src={TypescriptL} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-50'/>
                  <Image src={Logo} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-2000 motion-delay-300'/>
                </div>
              </div>                           
            </div>                                  
            <p className='w-2/3 text-white'>Ready for some unique perspective? Let's explore where technology meets money then embraces 
               wanderlust! 🚀</p>            
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Recent Posts</h2>
            {/* Placeholder for recent posts */}
            <p className="text-white">
              (Coming soon!)
            </p>
          </section>
        </main>
        <footer className="bg-zinc-800 text-white  bottom-0 w-full p-4 text-center">
          <p>© 2024 Volk's Personal Blog</p>
        </footer>
      </div>
    );
  }
  