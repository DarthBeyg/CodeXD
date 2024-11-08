import { Raleway, Roboto_Mono, } from 'next/font/google' // Importing fonts
import Image from 'next/image' // Importing Image tag
import C from '../components/logos/c.svg' // Importing C logo
import Nextjs from '../components/logos/nextjs.svg' // Importing Nextjs logo
import Python from '../components/logos/python.svg' // Importing Python logo
import ReactIcon from '../components/logos/react.svg' // Importing React logo
import Node from '../components/logos/nodejs.svg' // Importing Nodejs logo
import TailwindL from '../components/logos/tailwind.svg' // Importing Tailwind logo
import TypescriptL from '../components/logos/typescript.svg' // Importing Typescript logo
import Logo from '../components/logos/html5.svg' // Importing Html Logo


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
      <div className={`bg-[#fcd86b] min-h-screen text-2xl`}>         
        <main className="container mx-auto p-4 sm:p-8">
          <section className="mb-8">    
            <div className="flex flex-col md:flex-row items-start mb-4">
              <div className="w-full md:w-2/3 pr-0 md:pr-8">
                <div className={`${fontA.className} text-xl md:text-2xl text-white font-medium text-justify mb-4`}>
                 <h2 className='motion-preset-pop motion-duration-500 motion-delay-150'> Hey there! I'm Volk – a code-slinging Software Engineer, who likes to
                  dive in the market charts as I am debugging production systems..
                 </h2>
                </div>
                <p className={`${fontB.className} text-black font-normal text-xl md:text-2xl text-justify`}>
                  During the day, I craft digital solutions that make the businesses tick. By night, I'm analyzing market trends, hunting
                  for the next big tech opportunity, or planning my next adventure across the globe. Yeah, I'm that guy who gets equally 
                  excited about a perfectly executed trading strategy and a beautifully written piece of code.
                </p> <br />
                <p className='text-white motion-preset-pop motion-duration-500 motion-delay-350'>Here's what to expect from this blog:</p>  
                <p className={`${fontB.className} text-xl md:text-2xl text-black`}>
                --Tales from the trenches of software development <br />
                --My trading adventures (wins and face-palms included) <br />
                --Tech deep-dives that won't put you to sleep <br />
                --Travel stories that somehow connect back to tech and trading <br />
                --Life hacks from someone who juggles multiple passions <br />            
                </p><br />
              </div>
              <div className="flex flex-col items-center md:items-center mt-8 lg:ml-12"> {/* Adjusted alignment for larger screens */}
                <Image src='/pfp/1.jpg' alt="Profile Picture" width={450} height={300} className="rounded-full motion-preset-bounce motion-duration-750 motion-delay-500" />
                <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-8 mx-4 md:mx-20"> {/* Responsive logo container */}
                  <Image src={C} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-75'/> 
                  <Image src={Python} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-125'/>
                  <Image src={Nextjs} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-150'/>
                  <Image src={ReactIcon} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-175'/>
                </div>
                <div className={`${fontA.className} flex flex-wrap justify-center md:justify-end gap-4 mt-10 mx-4 md:mx-20`}> {/* Responsive logo container */}
                  <Image src={Node} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-225'/> 
                  <Image src={TailwindL} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-100'/>
                  <Image src={TypescriptL} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-50'/>
                  <Image src={Logo} alt="logo" width={40} height={40} className='motion-preset-oscillate motion-duration-500 motion-delay-300'/>
                </div>
              </div>                           
            </div>                                  
            <p className='w-full md:w-2/3 text-white motion-preset-pop motion-duration-500 motion-delay-200'>Ready for some unique perspective? Let's explore where technology meets money then embraces 
               wanderlust! 🚀</p>            
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Recent Posts</h2>
            {/* Placeholder for recent posts */}
            <p className="text-white">
              (Coming soon!)
            </p>
          </section>
        </main>         
      </div>
    );
  }
  