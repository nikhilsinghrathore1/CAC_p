import React from 'react'
import { GoArrowUpLeft } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

const SingleEvent = () => {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});
  const navigate = useNavigate()
  return (
    <div className='main text-white w-full'>
               {/* this is the background images section */}
               <div className='w-full h-screen fixed top-0 z-0 flex flex-wrap'>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               <img className='w-[20%] h-[20%] object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7e5/64a6a2398d980f1140aec055_tile-2.svg"/>
               </div>
               {/* this is the first page */}
               <div className='relative z-20 h-[150vh] text-white  '>
               {/* this is the nav section */}
                              <nav className='w-full fixed top-0 flex justify-between px-5 z-20 items-start'>
                                             <div className='text-xl uppercase pt-5 leading-[17px] f5 font-bold'>
                                                            <h1>d</h1>
                                                            <h1>a</h1>
                                                            <h1>c</h1>
                                             </div>
                                             <div>
                                                            <h1 className='text-xl f5 pt-3 tracking-'>MENU</h1>
                                             </div>
                              </nav>
               {/* this is the back section */}
                              <div className='w-full uppercase f5 mb-10 mt-[150px] text-xs text-center'>
                                             <h1 onClick={()=>navigate("/")}>[back]</h1>
                              </div>

                              <div className='w-full text-center leading-none mt-24 -mb-14 relative z-10 '>
                                             <h1 data-Scroll data-scroll-speed='-0.05' className='text-[13em]  f5 font-bold tracking-wide uppercase'>Shaw</h1>
                              </div>

                              <div data-Scroll data-scroll-speed='0.5' className='w-full h-[120vh]'>
                                             <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d6710617f7672398d96_Shaw-Cover.webp" alt="not showing" />
                              </div>

               </div>
               {/* ṭhis is the second image section like literaly */}
               <div className='w-full h-[210vh] pt-5 relative z-10 text-white'>
                              <div data-scroll data-scroll-speed='0.2' className='w-[50%] text-white  mx-auto bg-red-50 h-[175vh] '>
                                             <img className='w-full h-full' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d6a5fbaef8c815e2a3e_Shaw-Image%201.webp" alt="not showing" />
                              </div>
                              <div className='w-full flex -mt-72 mix-blend-difference  pl-32'>
                                             <div className='w-1/2 pt-60 '>
                                                            <p className='w-[35%] f5 text-xs'>BEAUTIFULLY EDGED. INSATIABLY RAW. A SPACE THAT BECKONS—BEGS—FOR ONE TO RETREAT WITHIN ITS WALLS.</p>
                                             </div>
                                             <div data-scroll data-scroll-speed='0.5' className='w-1/2 '>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>MANIFESTING THE</p>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>BAROQUE</p>
                                                           <p className='text-6xl leading-[52px]  f5 font-bold'>DRAMATICS OF A</p>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>BYGONE ERA.</p>
                                                           <p className='text-6xl leading-[52px]  f5 font-bold'>SHATTERING THE</p>
                                                           <p className='text-6xl leading-[52px]  f5 font-bold'>BOUNDARIES</p>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>FOOLISHLY</p>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>CREATED BY</p>
                                                           <p className='text-6xl leading-[52px] f5 font-bold'>MODERN RULES.</p>
                                             </div>

                              </div>
               </div>

               {/* this is the third section */}
               <div className='w-full h-[160vh] text-white relative z-10 mt-16 pl-3'>
                              <div data-scroll data-scroll-speed='0.3' className='w-[50%] h-[135vh] '>
                                             <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d6cd954591191e93fde_Shaw-Image%202.webp" alt="not showing" />
                              </div>
                              <div className='w-full -mt-96 mix-blend-difference  flex'>
                              <div className='w-[35%]'></div>
                              <div data-scroll data-scroll-speed='0.5' className='w-[65%]'>
                              <p className='text-7xl leading-[61px] f5 font-bold'>A SANCTUM OF REST</p>
                              <p className='text-7xl leading-[61px] f5 font-bold'>AND REFLECTION,</p>
                              <p className='text-7xl leading-[61px] f5 font-bold'>INSPIRED BY</p>
                              <p className='text-7xl leading-[61px] f5 font-bold'>CRUSADERS OF THE</p>
                              <p className='text-7xl leading-[61px] f5 font-bold'>DARKNESS THAT</p>
                              <p className='text-7xl leading-[61px] f5 font-bold'>CAME BEFORE US</p>

                              <div>
                              <p className='w-[23%] mt-5 f5 text-xs'>WITH LAYERED TEXTURES AND MAJESTIC MURALS THAT TOWER OVER EVERY PIECE—CASCADING A SPECIFIC ELEGANCE TO EACH CORNER OF THE SPACE— A SANCTUARY EMERGES IN A BEDROOM DESIGNED TO HONOR THE LIKES OF CARAVAGGIO HIMSELF.</p>
                              </div>
                              </div>
                              </div>
               </div>

               {/* this is the fourth section */}
               <div className='w-full h-[280vh] relative z-10 pl-3'>
                              <div data-scroll data-scroll-speed='0.3' className='w-[48%] h-[145vh] mx-auto'>
                                             <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d6f10388009af6c0351_Shaw-Image%203.webp" alt="not showing" />
                              </div>
                              <div data-scroll data-scroll-speed='0.4' className='w-[50%] h-[125vh] -mt-44'>
                                             <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d711d6a5e3d4b8cb6d6_Shaw-Image%204.webp" alt="not showing" />
                              </div>

                              <div data-scroll data-scroll-speed='0.6' className='w-full -mt-[420px] mix-blend-difference flex'>
                                             <div className='w-[35%]'></div>
                                             <div className='w-[65%]'>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>AN EARTHLY</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>ELEMENT THAT HAS</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>STARTED FEUDS AND</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>ENDED WARS. EQUAL</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>PARTS MADNESS AND</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>PEACE. THE</p>
                                             <p className='text-7xl leading-[61px] f5 font-bold'>CURRENCY OF KINGS</p>

                                             <div>
                                             <p className='w-[23%] mt-5 f5 text-xs'>FIXED AMONG THE RICH BALANCE OF CALIGINOUS TONES AND VIBRANT MOMENTS, ARTISAN LAMPS ENCASED IN GOLD LEAF ADORN HEIRLOOM BED TABLES, MORPHING INTO HUMAN FORMS THAT SPEAK TO THE INNER PEACE THE SPACE EVOKES.</p>
                                             </div>
                                             </div>
                              </div>
               </div>

               {/* this is the second last section */}

               <div className='w-full h-[270vh] relative z-10 pt-20'>

                              <div className='w-[50%] h-[135vh] pl-3'>
                                             <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d7d2b268cf753c2576e_Shaw-Image%206.webp" alt="not showing" />
                              </div>

                              <div className='w-full mt-40 flex flex-nowrap px-5 gap-7 overflow-auto '>
                                             <div className='w-[30%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d858d05eb1312b5aefe_Shaw-Image%207.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[25%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d8576464e68693bcb60_Shaw-Image%208.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[47%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d85250857285958f3d1_Shaw-Image%209.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[35%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d85d284d2009733e3a4_Shaw-Image%2011.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[25%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d841d6a5e3d4b8cded4_Shaw-Image%2012.webp" alt="not showing" />
                                             </div>
                                             <div className='w-[30%] rounded h-[90vh] flex-shrink-0'>
                                                            <img className='w-full h-full object-cover' src="https://assets-global.website-files.com/6499b4ba68bde9623cafd7f2/64d49d85d954591191e96909_Shaw-Image%2015.webp" alt="not showing" />
                                             </div>
                              </div>

                              <div className='w-full flex justify-end  mt-5'>
                                             <div className='w-[30%] flex'>
                                                            <GoArrowUpLeft className='text-5xl'/>
                                             <div>
                                             <p className='text-4xl leading-[35px] f5 font-bold'>BACK TO ALL </p>
                                             <p className='text-4xl leading-[35px] f5 font-bold'>PROJECTS</p>
                                             </div>

                                             </div>
                              </div>



               </div>

               {/* this is the footer */}

               <div className='w-full h-screen relative z-10 pt-[5%] '>

               <div className='w-[40%] ml-20 mt-44 flex items-start gap-2'>
                              <div><CgMail className='text-6xl font-light'/></div>
                              <div className='pt-1'>
                                             <p className='text-4xl leading-[35px] f5 tracking-wide font-bold'>GET IN</p>
                                             <p className='text-4xl leading-[35px] f5 font-bold tracking-wide'>TOUCH</p>
                                             
                              </div>
                              <div>
                                             <GoArrowUpLeft className='text-6xl -ml-2 rotate-180'/>
                              </div>
               </div>

               <div className='w-full flex flex-nowrap mt-48 '>
                              <p className='text-8xl font-bold uppercase f5 whitespace-nowrap marque'>nikochan plays footbal nikochan plays footbal nikochan plays footbal nikochan plays footbal nikochan plays footbal</p>
               </div>

               <div className='w-full flex justify-between items-center mt-9 px-10'>
                              <div>
                                             <p className='text-[13px] f5 '>DAC © 2023</p>
                              </div>
                              <div className='uppercase flex gap-5 w-[20%]'>
                                             <p className='text-[13px]  f5 '>home</p>
                                             <p className='text-[13px]  f5 '>portfolio</p>
                                             <p className='text-[13px]  f5 '>acclaim</p>
                                             <p className='text-[13px]  f5 '>about</p>
                                             <p className='text-[13px]  f5 '>contact</p>
                              </div>
                              
                              <div className='flex gap-5 w-[15%] uppercase'>
                                             <p className='text-[13px]  f5 '>SITE BY nikochan</p>
                                             <p className='text-[13px]  f5 '>legal</p>
                              </div>
               </div>
               </div>


    </div>
  )
}

export default SingleEvent