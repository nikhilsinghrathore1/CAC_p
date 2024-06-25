import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Box from '../components/Box';


const Clubs = () => {

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

  return (
    <div className='w-full text-[#ECE6D5] bg-[#050C0F] overflow-hidden '>
               {/* this is the hero section of this club page */}

               <div className='w-full relative h-screen px-10 pt-10'>
                {/* this is the nav bar section */}
                    <nav className='w-full flex capitalize  justify-between f8 text-sm '>
                      <p>CAC</p>
                      <p>work</p>
                      <p>about</p>
                      <div className='flex items-center '>
                      <p >linkedIn</p>
                      <GoArrowUpRight className='text-lg text-white'/>
                      </div>
              
                      
                    </nav>

                  {/* this the main text section */}

                  <div className='w-full f7 text-center'>
                        <p className='text-[23px] tracking-[10px] overflow-hidden uppercase mt-40'><motion.span className='inline-block '
                        initial={{opacity:1,y:"90%"}}
                        animate={{opacity:1,y:"0%"}}
                        transition={{delay:0.2,duration:0.5,ease:Power4.easeIn}}> nikochan kun </motion.span></p>
                        <h1 className='text-[10rem] overflow-hidden pt-2  h-32 leading-[110px] mt-8'><motion.span className='inline-block '
                        initial={{opacity:1,y:"120%"}}
                        animate={{opacity:1,y:"0%"}}
                        transition={{delay:0.4,duration:0.5,ease:Power4.easeIn}}> I WIN THINGS FOR A LIVING </motion.span></h1>
                  </div>

                  {/* this is the paragraph section of the hero page */}

                  <div className='text-[15px] absolute bottom-7 opacity-90 f8 font-light tracking-tight w-full  '>
                    <p className='mb-[3px]'>Lead Experience & UI Designer and end-to-end product</p>
                    <p className='mb-[3px]'>designer. Leading a passionate team with a holistic</p>
                    <p className='mb-[3px]'>approach to design. Passionate about designing for</p>
                    <p className='mb-[3px]'>people from start to finish through Brand Experience, CX,</p>
                    <p>UX, UI & interaction design, and creative development.</p>
                  </div>
                   
               </div>

               {/* this is the club info section */}

               <div className='w-full h-screen items flex px-9 items-end'>
                <Box mainText={["Sydney","Symphony","orchestra"]} subText={"SSO website complete redegign (Password required)"} role={["Lead UI/UX designer","interaction designer"]} agency={["carter.","nikoChan"]}/>
                <Box mainText={["australian","grand prix"]} subText={"AusGP & MotoGP twin websites (Password required)"} role={["Lead UI/UX designer","interaction designer"]} agency={["carter.","nikoChan"]}/>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <div className='text-[18px] tracking-tight opacity-50 font-light f8'>
                      <p className='mb-[2px]'>Over 12 years of experience</p>
                      <p className='mb-[2px]'>in end-to-end digital design</p>
                      <p className='mb-[2px]'>work, bringing stories to life</p>
                      <p className='mb-[2px]'>with amazing teams of</p>
                      <p className='mb-[2px]'>talented people. Learning</p>
                      <p className='mb-[2px]'>and growing together</p>
                      <p>through shared experiences.</p>
                    </div>
                </div>
               </div>

               {/* this the the third section */}

               <div className='w-full mb-[0.5px]  items flex px-9 items-start'>
              
                <div className='w-[32%] h-full'>
                    <div className='flex pl-5 pt-16 w-full  h-[49%] text-[18px] tracking-tight opacity-50 font-light f8'>
                      <div className='text-justify'>
                      <p className='mb-[2px]'>Over 12 years of experience</p>
                      <p className='mb-[2px]'>in end-to-end digital design</p>
                      <p className='mb-[2px]'>work, bringing stories to life</p>
                      <p className='mb-[2px]'>with amazing teams of</p>
                      <p className='mb-[2px]'>talented people. Learning</p>
                      <p className='mb-[2px]'>and growing together</p>
                      <p>through shared experiences.</p>
                      </div>
                    </div>

                      <div className='w-full text-center text-3xl pr-10 opacity-50'>
                        <h1>*</h1>
                      </div>

                    <div className='flex justify-end pr-7 pt-8 w-full h-[49%] text-[18px] tracking-tight opacity-50 font-light f8'>
                      <div>
                      <p className='mb-[2px]'>Over 12 years of experience</p>
                      <p className='mb-[2px]'>in end-to-end digital design</p>
                      <p className='mb-[2px]'>work, bringing stories to life</p>
                      <p className='mb-[2px]'>with amazing teams of</p>
                      <p className='mb-[2px]'>talented people. Learning</p>
                      <p className='mb-[2px]'>and growing together</p>
                      <p>through shared experiences.</p>
                      </div>
                    </div>
                </div>

                <Box mainText={["hassel","",]} subText={"Bringing to the life the digital vision of Hassell's new brand identity"} role={["Lead UI/UX designer","interaction designer"]} agency={["carter.","nikoChan"]}/>
                <Box mainText={["Hicaps","terminal","replacement"]} subText={"Replacing the fleet of healthcare payment terminal"} role={["Lead UI/UX designer","interaction designer"]} agency={["Bound.","nikoChan"]}/>
               </div>

               {/* this is the fourth section */}

               <div className='w-full flex px-9 items-start'>
               <Box mainText={["queensland","theater"]} subText={"Redesigning the digital stage for the Theater"} role={["Lead UI/UX designer","interaction designer"]} agency={["Bound.","nikoChan"]}/>

              
              <div className='w-[32%] h-full'>
                  <div className='flex pl-5 pt-16 w-full  h-[49%] text-[18px] tracking-tight opacity-50 font-light f8'>
                    <div className='text-justify'>
                    <p className='mb-[2px]'>Over 12 years of experience</p>
                    <p className='mb-[2px]'>in end-to-end digital design</p>
                    <p className='mb-[2px]'>work, bringing stories to life</p>
                    <p className='mb-[2px]'>with amazing teams of</p>
                    <p className='mb-[2px]'>talented people. Learning</p>
                    <p className='mb-[2px]'>and growing together</p>
                    <p>through shared experiences.</p>
                    </div>
                  </div>

                    <div className='w-full text-center text-3xl pr-10 opacity-50'>
                      <h1>*</h1>
                    </div>

                  <div className='flex justify-end pr-7 pt-8 w-full h-[49%] text-[18px] tracking-tight opacity-50 font-light f8'>
                    <div>
                    <p className='mb-[2px]'>Over 12 years of experience</p>
                    <p className='mb-[2px]'>in end-to-end digital design</p>
                    <p className='mb-[2px]'>work, bringing stories to life</p>
                    <p className='mb-[2px]'>with amazing teams of</p>
                    <p className='mb-[2px]'>talented people. Learning</p>
                    <p className='mb-[2px]'>and growing together</p>
                    <p>through shared experiences.</p>
                    </div>
                  </div>
              </div>

            
              <Box mainText={["health","active by","design"]} subText={"Guidelines and program for the specilists creating our everyday surrounding"} role={["Lead UI/UX designer","interaction designer"]} agency={["carter.","nikoChan"]}/>
             </div>

             {/* this is the last section */}

                <div className='w-full h-screen relative flex justify-center pt-5'>
                    <div className=' h-full leading-[110px]'>
                      <h1 className='f7 text-[125px]'>STAY CURIOUS.</h1>
                      <h1 className='f7 text-[125px]'>EXPERIMENT.</h1>
                      <h1 className='f7 text-[125px]'>FAIL FAST.</h1>
                      <h1 className='f7 text-[125px]'>LEARN.</h1>
                      <h1 className='f7 text-[125px]'>HAVE FUN.</h1>
                    </div>
                    <p className='absolute bottom-12 right-32 text-[15px] opacity-60 w-[30%]'>As I live and work on the land of the Wurundjeri People of the Kulin Nation, I pay my respect to their Elders past, present and emerging. Acknowledging, and respecting their cultures and heritage, and recognising the continuing sovereignty of all Aboriginal and Torres Strait Islander Nations.</p>
                </div>

    </div>
  )
}

export default Clubs