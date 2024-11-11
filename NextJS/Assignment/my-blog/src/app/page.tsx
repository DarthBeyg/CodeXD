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
import Illustration from '../components/illustrations/illustration.svg' // Importing Illustration
import Recent from '../components/recent/Recent' // Importing Recent Post component



const fontA = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const fontB = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function Home() { 
    return (
      <div className={`bg-[#e0f2f7] min-h-screen`}>         
        <main className="container mx-auto p-4 sm:p-8">
          <section className="mb-8">    
            <div className="flex flex-col md:flex-row items-start mb-4">
              <div className="w-full md:w-2/3 pr-0 md:pr-8">
                <div className={`${fontA.className} text-justify mb-4`}>
                 <h2 className='text-black font-medium motion-preset-pop motion-duration-500 motion-delay-150 text-xl md:text-2xl'> Hey there! I'm Volk – a code-slinging Software Engineer, who likes to
                  dive in the market charts as I am debugging production systems..
                 </h2>
                </div>
                <p className={`${fontB.className} motion-preset-confetti motion-duration-1000 motion-delay-950 text-[#232946] text-justify text-base md:text-lg`}>
                  During the day, I craft digital solutions that make the businesses tick. By night, I'm analyzing market trends, hunting
                  for the next big tech opportunity, or planning my next adventure across the globe. Yeah, I'm that guy who gets equally 
                  excited about a perfectly executed trading strategy and a beautifully written piece of code.
                </p> <br />
                <p className={`${fontA.className} text-black font-medium motion-preset-pop motion-duration-500 motion-delay-350 text-base md:text-lg`}>Here's what to expect from this blog:</p>  
                <p className={`${fontB.className} motion-preset-confetti motion-duration-1000 motion-delay-950 text-[#232946] text-base md:text-lg`}>
                --Tales from the trenches of software development <br />
                --My trading adventures (wins and face-palms included) <br />
                --Tech deep-dives that won't put you to sleep <br />
                --Travel stories that somehow connect back to tech and trading <br />
                --Life hacks from someone who juggles multiple passions <br />            
                </p><br />
              </div>
              <div className="flex flex-col items-center md:items-center mt-8 lg:ml-12"> {/* Adjusted alignment for larger screens */}
                <Image src='/pfp/1.jpg' alt="Profile Picture" width={450} height={300} className="rounded-full motion-preset-bounce motion-duration-750 motion-delay-500 w-full md:w-auto max-w-md" />
                <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-8 mx-4 md:mx-20"> {/* Responsive logo container */}
                  <Image src={C} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-75 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' /> 
                  <Image src={Python} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-125 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                  <Image src={Nextjs} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-150 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                  <Image src={ReactIcon} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-175 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                </div>
                <div className={`${fontA.className} flex flex-wrap justify-center md:justify-end gap-4 mt-10 mx-4 md:mx-20`}> {/* Responsive logo container */}
                  <Image src={Node} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-225 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' /> 
                  <Image src={TailwindL} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-100 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                  <Image src={TypescriptL} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-50 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                  <Image src={Logo} alt="logo" width={50} height={50} className='motion-preset-oscillate motion-duration-500 motion-delay-300 hover:scale-150 transition-transform duration-300 ease-in-out w-auto' />
                </div>
              </div>                           
            </div>                                  
            <p className={`${fontA.className} w-full md:w-2/3 text-black font-medium motion-preset-pop motion-duration-500 motion-delay-200 text-base md:text-lg`}>Ready for some unique perspective? Let's explore where technology meets money then embraces 
               wanderlust! 🚀</p>            
          </section>
          < section className='flex flex-col md:flex-row items-start'> {/* Added flex-row and items-start to align Recent and Image */}
            <h2 className={`${fontA.className} text-xl font-semibold md:text-2xl mb-4 text-[#232946]`}>Recent Posts</h2>                      
            <div className="flex flex-col p-5"> {/* Added flex-col to align Recent to the left */}
              <Recent/>
            </div>
            <Image src={Illustration} alt="Illustration" width={500} height={300} className='motion-preset-slide-down motion-duration-550 motion-delay-500 ml-10 w-full md:w-auto max-w-md' /> {/* Added ml-10 for spacing */}
          </section>
        </main>         
      </div>
    );
  }
