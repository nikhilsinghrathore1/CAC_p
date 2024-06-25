import { useGSAP } from '@gsap/react'
import { delay, motion } from 'framer-motion'
import gsap, { Power4 } from 'gsap/all'
import {ScrollTrigger}from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Marquess from '../components/Marquess'





const Landing = () => {

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

               const pin = useRef(null)
               const hori= useRef(null)
              useGSAP(()=>{
               gsap.registerPlugin(ScrollTrigger)

               let tl = gsap.timeline({
                              scrollTrigger:{
                                             trigger:pin.current,
                                             top: "0 0",
                                             end:"2000px 0",
                                             scrub:10,
                                             pin:true
                              }
               })

               tl.to(hori.current,{

                              x:"-85%",
                              duration:10,

               })
             

               
              })
               

  return (
    <div className='main w-full  overflow-hidden'>

{/* this is the loader screen */}

<motion.div className='w-full fixed top-0 z-50 h-screen bg-[#ED3C24] flex items-center justify-center'
 initial={{opacity:1}}
 whileInView ={{opacity:.7,y:"-100%"}}
 transition ={{delay:1,duration:1 , ease:Power4.easeIn}}>
<svg  alt="Logo" viewBox="0 0 75 56" width={55} height={55}  fill="#050505" xmlns="http://www.w3.org/2000/svg">
<path d="M41.4647 55.1123C41.1435 54.8344 40.8351 54.54 40.4985 54.2797C35.8961 50.7291 32.4381 46.3119 30.3485 40.8628C28.5872 36.2686 28.0349 31.5195 28.6224 26.6427C29.4819 19.518 32.5201 13.3759 37.1425 7.96666C37.3618 7.70986 37.7195 7.4894 38.0478 7.42257C41.4495 6.71901 44.8594 6.05063 48.267 5.37286C52.0193 4.62591 55.7705 3.87662 59.5228 3.13085C63.505 2.33934 67.4895 1.55839 71.4693 0.756329C72.5739 0.533535 73.6667 0.254455 74.7655 0C74.844 0 74.9214 0 75 0C74.966 0.300186 74.9742 0.610925 74.8933 0.897039C73.7523 4.90968 72.5997 8.91881 71.4493 12.9291C70.5758 15.9732 68.9658 18.5072 66.3262 20.3282C64.8007 21.3812 63.0805 21.8913 61.2758 22.2302C57.8049 22.881 54.3481 23.6056 50.8796 24.2764C50.4715 24.3549 50.3425 24.573 50.2452 24.9201C49.8594 26.2897 49.4525 27.6535 49.0585 29.0207C48.8568 29.7196 48.6669 30.4208 48.4499 31.1947C54.7609 29.9424 60.9663 28.7112 67.2174 27.4705C67.208 27.6183 67.2162 27.6945 67.1963 27.7625C66.7871 29.1861 66.4259 30.6272 65.9545 32.0296C64.565 36.163 61.956 39.0547 57.6795 40.4172C50.0869 42.8387 44.7222 47.7741 41.582 55.1123C41.5433 55.1123 41.5034 55.1123 41.4647 55.1123Z"></path>
<path d="M15.4003 5.10931C15.6876 7.23172 15.7486 9.18879 15.2983 11.2983C16.7781 10.2828 17.8722 9.10905 18.6789 7.66675C19.4845 6.22445 19.8316 4.66372 19.8808 3.00684C20.9408 5.3837 21.7112 7.80395 21.1402 10.5549C24.5032 9.89118 27.7818 9.2439 31.1941 8.57083C25.4061 16.8377 23.2497 25.8913 24.5384 35.8655C24.3684 35.7177 24.2499 35.6309 24.1491 35.5266C20.2291 31.5339 15.5117 29.7046 9.9055 30.2405C7.92263 30.4305 6.01481 30.8526 4.24418 31.793C2.67406 32.6267 1.43111 33.8099 0.388664 35.3343C0.284302 34.4455 0.1389 33.559 0.0814427 32.6678C-0.133143 29.2954 0.0521243 25.9523 0.928058 22.6737C0.981997 22.472 1.24466 22.2375 1.45339 22.1812C2.11122 22.003 2.78664 21.8845 3.46088 21.7767C3.94517 21.6993 4.16092 21.4718 4.28404 20.9711C4.91959 18.3773 5.89755 15.9242 7.43834 13.7197C8.4632 12.2528 9.81286 11.1412 11.2974 10.1749C11.8696 9.80206 12.4477 9.43386 12.9976 9.02932C14.2265 8.12524 15.0567 6.96319 15.2385 5.4048C15.2444 5.35673 15.2866 5.31217 15.4003 5.10931ZM16.3747 14.8431C16.3126 14.9334 16.2446 15.0213 16.1883 15.1151C14.9805 17.1379 13.4092 18.6435 10.9667 19.0809C9.9395 19.265 9.09406 19.8571 8.67544 20.8937C8.4843 21.3686 8.30724 21.8494 8.10086 22.3864C9.02956 22.2164 9.97116 21.9572 10.9268 21.8916C12.1264 21.8095 12.9132 21.2103 13.5101 20.2476C13.5206 20.2312 13.5359 20.2183 13.5464 20.2019C14.7577 18.5684 15.7239 16.8037 16.3747 14.8431Z"></path>
 </svg>
                                         
</motion.div>


               {/* /this is the first section */}

               <div className='w-full h-[230vh] text-white  bg-[#050505] relative pl-[114px] pr-[110px] '>
                              {/* this is the nav section */}

                              <motion.nav className='w-full h-[17.2vh]  z-30 flex justify-between f1  text-xs items-center pl-[114px] pr-[110px] fixed top-0 left-0'
                               initial={{opacity:0,y:"50%"}}
                               whileInView ={{opacity:1 , y:"0%"}}
                               transition ={{delay:1.5, duration:0.7 , ease:Power4.easeIn}}>
                                             {/* this is the left portion of the nav bar */}
                                             <div className='w-[52.5%] mix flex items-center mix-blend-difference h-full justify-between '>
                                             {/* this is the svg section */}
                                                            <div className='w-[83px] pb-3 flex items-end justify-center  bg-[#ED3C24] h-full hover:h-[115%] transi '>
                                                            <svg  alt="Logo" viewBox="0 0 75 56" width={55} height={55}  fill="#050505" xmlns="http://www.w3.org/2000/svg">
<path d="M41.4647 55.1123C41.1435 54.8344 40.8351 54.54 40.4985 54.2797C35.8961 50.7291 32.4381 46.3119 30.3485 40.8628C28.5872 36.2686 28.0349 31.5195 28.6224 26.6427C29.4819 19.518 32.5201 13.3759 37.1425 7.96666C37.3618 7.70986 37.7195 7.4894 38.0478 7.42257C41.4495 6.71901 44.8594 6.05063 48.267 5.37286C52.0193 4.62591 55.7705 3.87662 59.5228 3.13085C63.505 2.33934 67.4895 1.55839 71.4693 0.756329C72.5739 0.533535 73.6667 0.254455 74.7655 0C74.844 0 74.9214 0 75 0C74.966 0.300186 74.9742 0.610925 74.8933 0.897039C73.7523 4.90968 72.5997 8.91881 71.4493 12.9291C70.5758 15.9732 68.9658 18.5072 66.3262 20.3282C64.8007 21.3812 63.0805 21.8913 61.2758 22.2302C57.8049 22.881 54.3481 23.6056 50.8796 24.2764C50.4715 24.3549 50.3425 24.573 50.2452 24.9201C49.8594 26.2897 49.4525 27.6535 49.0585 29.0207C48.8568 29.7196 48.6669 30.4208 48.4499 31.1947C54.7609 29.9424 60.9663 28.7112 67.2174 27.4705C67.208 27.6183 67.2162 27.6945 67.1963 27.7625C66.7871 29.1861 66.4259 30.6272 65.9545 32.0296C64.565 36.163 61.956 39.0547 57.6795 40.4172C50.0869 42.8387 44.7222 47.7741 41.582 55.1123C41.5433 55.1123 41.5034 55.1123 41.4647 55.1123Z"></path>
<path d="M15.4003 5.10931C15.6876 7.23172 15.7486 9.18879 15.2983 11.2983C16.7781 10.2828 17.8722 9.10905 18.6789 7.66675C19.4845 6.22445 19.8316 4.66372 19.8808 3.00684C20.9408 5.3837 21.7112 7.80395 21.1402 10.5549C24.5032 9.89118 27.7818 9.2439 31.1941 8.57083C25.4061 16.8377 23.2497 25.8913 24.5384 35.8655C24.3684 35.7177 24.2499 35.6309 24.1491 35.5266C20.2291 31.5339 15.5117 29.7046 9.9055 30.2405C7.92263 30.4305 6.01481 30.8526 4.24418 31.793C2.67406 32.6267 1.43111 33.8099 0.388664 35.3343C0.284302 34.4455 0.1389 33.559 0.0814427 32.6678C-0.133143 29.2954 0.0521243 25.9523 0.928058 22.6737C0.981997 22.472 1.24466 22.2375 1.45339 22.1812C2.11122 22.003 2.78664 21.8845 3.46088 21.7767C3.94517 21.6993 4.16092 21.4718 4.28404 20.9711C4.91959 18.3773 5.89755 15.9242 7.43834 13.7197C8.4632 12.2528 9.81286 11.1412 11.2974 10.1749C11.8696 9.80206 12.4477 9.43386 12.9976 9.02932C14.2265 8.12524 15.0567 6.96319 15.2385 5.4048C15.2444 5.35673 15.2866 5.31217 15.4003 5.10931ZM16.3747 14.8431C16.3126 14.9334 16.2446 15.0213 16.1883 15.1151C14.9805 17.1379 13.4092 18.6435 10.9667 19.0809C9.9395 19.265 9.09406 19.8571 8.67544 20.8937C8.4843 21.3686 8.30724 21.8494 8.10086 22.3864C9.02956 22.2164 9.97116 21.9572 10.9268 21.8916C12.1264 21.8095 12.9132 21.2103 13.5101 20.2476C13.5206 20.2312 13.5359 20.2183 13.5464 20.2019C14.7577 18.5684 15.7239 16.8037 16.3747 14.8431Z"></path>
                                                            </svg>
                                         
                                                            </div>
                                             {/*this is left text portion */}
                                             <div className='flex  pt-1 items-center mix-blend-difference opacity-80 gap-12'>

                                          <p >NikoChan Studios</p>

                                          <p className='w-9 border-t-[1px] border-white '></p>

                                             <div className='pt-4 leading-[15px] '>
                                                            <p>Learning, digital design &</p>
                                                            <p>Hackathon experiences</p>
                                             </div>

                                             </div>

                                             </div>


                                             {/* this is the right portion of the nav bar */}

                                             <div className=' ml-20 pt-1 '>
                                                            <p className='opacity-80 pl-20'>Menu</p>
                                             </div>



                              </motion.nav>

                              <div className='w-full text-[95px] relative z-20 leading-none f1 pt-[205px] h-[100vh]'>
                                             <h1 className='opacity-80 overflow-hidden '><motion.span className='inline-block'
                                             initial={{opacity:0,y:"90%"}}
                                             whileInView={{opacity:1,y:"0%"}}
                                             transition={{delay:1.5,duration:0.7,ease:Power4.easeIn}}
                                             >Visual</motion.span>
                                             </h1>

                                             <h1 className='opacity-80 overflow-hidden h-28 -mb-3'><motion.span className='inline-block '
                                             initial={{opacity:0,y:"80%" }}
                                             whileInView={{opacity:1,y:"0%" }}
                                             transition={{delay:1.6,duration:0.7,ease:Power4.easeIn}}
                                             >Competition</motion.span>
                                             </h1>
                                             
                                             <h1 className=' opacity-80 overflow-hidden'><motion.span className='inline-block '
                                             initial={{opacity:0,y:"90%"}}
                                             whileInView={{opacity:1,y:"0%"}}
                                             transition={{delay:1.7,duration:0.7,ease:Power4.easeIn}}
                                             >that Captivates</motion.span>
                                             </h1>
                                             <h1 className=' opacity-80 overflow-hidden'><motion.span className='inline-block'
                                             initial={{opacity:0,y:"90%"}}
                                             whileInView={{opacity:1,y:"0%"}}
                                             transition={{delay:1.8,duration:0.7,ease:Power4.easeIn}}
                                             >the World</motion.span>
                                             </h1>
                              </div>

                              <div className='w-full h-[130vh] pt-72 flex relative z-20 justify-end'>

                                         
                                             <div className='w-1/2 h-full'>
                                                            <p className='text-[13px] tracking-wide f1 font-light  opacity-80 mb-10 overflow-hidden'><span> {["Core","values", "which", "drive" ,"Falconcept"].map((e,i)=>(
                                                                           <span className={`${i>0 && "ml-[4px]"} inline-block `}>{e.split("").map((el , ind)=>(<motion.span className='inline-block'
                                                                           initial={{opacity:0.2,y:"-71%"}}
                                                                           whileInView={{opacity:1,y:"0%"}}
                                                                           transition={{delay:.1*ind ,duration:0.2 , ease:Power4.easeIn}}>{el}</motion.span>))}</span>
                                                            ))} </span></p>

                                                            <div className='f1 text-4xl mb-10 opacity-80'>
                                                                           <h1 className='mb-3 overflow-hidden'>{["Hard", "work,", "dedication", "and"].map((e,i)=>(
                                                                                          <motion.span className={`${i>0 && "ml-2"} inline-block`}
                                                                                          initial={{opacity:0.3 , y:"-80%"}}
                                                                                          whileInView={{opacity:1,y:"0"}}
                                                                                          transition={{delay:0.1*i,duration:0.2,ease:Power4.easeOut}}>{e}</motion.span>
                                                                           ))}</h1>

                                                                           <h1 className='mb-3 overflow-hidden'>{["determination", "are", "our", "core","values."].map((e,i)=>(
                                                                                          <motion.span className={`${i>0 && "ml-2"} inline-block`}
                                                                                          initial={{opacity:0.3 , y:"-80%"}}
                                                                                          whileInView={{opacity:1,y:"0"}}
                                                                                          transition={{delay:0.1*i,duration:0.2,ease:Power4.easeIn}}>{e}</motion.span>
                                                                           ))}</h1>
                                                            </div>

                                                            <div className='f1 text-4xl mb-14 opacity-80'>
                                                            <h1 className='mb-3 overflow-hidden'>{["Holding", "ourself", "to" ,"the", "highest", "of"].map((e,i)=>(
                                                                                          <motion.span className={`${i>0 && "ml-2"} inline-block`}
                                                                                          initial={{opacity:0.3 , y:"-80%"}}
                                                                                          whileInView={{opacity:1,y:"0"}}
                                                                                          transition={{delay:0.1*i,duration:0.2,ease:Power4.easeIn}}>{e}</motion.span>
                                                                           ))}</h1>
                                                                           <h1 className='mb-3 overflow-hidden'><motion.span className='inline-block'
                                                                           initial={{opacity:0.5,y:"-80%"}}
                                                                           whileInView={{opacity:1,y:"0%"}}
                                                                           transition={{duration:0.4,ease:Power4.easeIn}}> standards I make sure to deliver the </motion.span></h1>
                                                                           <h1>highest quality events.</h1>
                                                            </div>

                                                            <div className='w-24 text-xs tracking-wide opacity-80 flex items-center justify-center h-24 rounded-full border-[1px] border-white'>
                                                                           <p>Culture</p>
                                                            </div>
                                             </div>

                              </div>

                                             {/* this is the behind svg section */}
                              <div className='absolute top-0 left-0 w-full h-full  items-center '>
                                             <div className='absolute w-full h-fit top-[50%] -translate-y-1/2' >         
                                                            {/* this is the svg section */}
                              <svg viewBox="0 0 1920 1080" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 135 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 -1.87201 1079.87)" stroke="#222222"></line>
<line x1="272.473" y1="1080" x2="272.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 410 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 273.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 135 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 271.872 1079.87)" stroke="#222222"></line>
<line x1="547.473" y1="1080" x2="547.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 685 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 548.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 410 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 546.872 1079.87)" stroke="#222222"></line>
<line x1="822.473" y1="1080" x2="822.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 960 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 823.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 685 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 821.872 1079.87)" stroke="#222222"></line>
<line x1="1097.47" y1="1080" x2="1097.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1235 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1098.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 960 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1096.87 1079.87)" stroke="#222222"></line>
<line x1="1372.47" y1="1080" x2="1372.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1510 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1373.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1235 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1371.87 1079.87)" stroke="#222222"></line>
<line x1="1647.47" y1="1080" x2="1647.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1785 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1648.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1510 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1646.87 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1785 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1921.87 1079.87)" stroke="#222222"></line>
                              </svg>
                                             </div>
                              </div>
               </div>

               {/* this is the sticky horizontal scroll section */}

               <div ref={pin} className='w-full relative h-[100vh] bg-[#D7D7D7] '>
                              <div className='w-[100vw] sticky top-0 z-10 left-0  pt-52 pl-[110px] tracking-tight  text-[122px] leading-none f2'>
                              <h1 className='mb-5'>se<span className='inline-block -mr-[25px]'>l</span> ected</h1>
                              <h1>wOrk</h1>
                              </div>

                              <div ref={hori} className='w-[200vw] h-full z-20 absolute left-0 top-0  '>
                                                            <img onClick={()=>window.location.href="http://localhost:5173/singlePage"} className='w-72 absolute top-20 left-[35%] h-44 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/6605cd104b4f1f496b120c94_coveryes-p-500.png" alt="not showing" />
                                                            <img onClick={()=>window.location.href="http://localhost:5173/singlePage"} className='w-72 absolute top-[60%] left-[46%] h-44 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/660462d11a6bc8335fa8eedb_social-p-500.png" alt="not showing" />
                                                            <img onClick={()=>window.location.href="http://localhost:5173/singlePage"} className='w-72 absolute top-[30%] left-[60%] h-44 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/666b62d484612efc30e30132_cookiecover(1)-p-500.png" alt="not showing" />
                                                            <img onClick={()=>window.location.href="http://localhost:5173/singlePage"} className='w-72 absolute top-[55%] left-[72%] h-44 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/660462d9c7a89540d1ec3869_ads-p-500.png" alt="not showing" />
                                                            <img onClick={()=>window.location.href="http://localhost:5173/singlePage"} className='w-72 absolute top-[20%] left-[85%] h-44 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8ce1/664fc6e3a396d8b66dc29624_ggdcover-p-500.png" alt="not showing" />
                              </div>
               </div>

               {/* this is the marquee section */}

               <div className='w-full h-[250vh] relative bg-[#050505] text-white '>
                              <div className='w-full h-[100vh] flex relative z-10  pt-72'>
                                             <div className='w-1/2 h-full pl-[114px] '>
                                                            <p className='text-[14px] tracking-wide f1 font-light  opacity-80 mb-5'>Services Falconcept provides Crafting </p>

                                                            <div className='f1 text-4xl mb-14 opacity-80'>
                                                                           <h1 className='mb-3'><span> Crafting captivating websites, </span></h1>
                                                                           <h1 className='mb-3'><span> distinctive branding, </span></h1>
                                                                           <h1><span> and dynamic digital design,</span></h1>
                                                            </div>

                                                            <div className='f1 text-4xl mb-10 opacity-80'>
                                                                           <h1 className='mb-3'><span>I bring your brand to life with </span></h1>
                                                                           <h1 className='mb-3'><span>precision and innovation in </span></h1>
                                                                           <h1><span>web design & development.</span></h1>
                                                            </div>
                                             </div>
                                             <div className='w-1/2 flex items-center justify-start pl-24 h-full'>
                                                            

                                                            <img className='w-32 h-32 object-cover' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8cc8/655b61e2555ba10c81838c77_ezgif.com-gif-maker%20(1).gif" alt="not showing" />
                                             </div>
                              </div>

                              <div className='w-full relative z-10 h-[150vh]'>
                                             <div className='pl-[114px] w-full mt-[360px]'>
                                                            <p onClick={()=>window.location.href="http://localhost:5173/club"} className='text-[14px] tracking-wide f1 font-light  opacity-80 mb-10'><span>Offering various Clubs</span></p>
                                             </div>

                                             {[1,2,3,4].map((e,i)=>(
                                                            <Marquess num={e} key={i}/>

                                             ))}
                                         

                              </div>

                              <div className='absolute top-0 w-full h-full '>
                                               <div className='absolute w-full top-[50%] -translate-y-1/2 z-0'>
                                                            <svg viewBox="0 0 1920 1080" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 135 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 -1.87201 1079.87)" stroke="#222222"></line>
<line x1="272.473" y1="1080" x2="272.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 410 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 273.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 135 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 271.872 1079.87)" stroke="#222222"></line>
<line x1="547.473" y1="1080" x2="547.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 685 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 548.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 410 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 546.872 1079.87)" stroke="#222222"></line>
<line x1="822.473" y1="1080" x2="822.473" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 960 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 823.128 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 685 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 821.872 1079.87)" stroke="#222222"></line>
<line x1="1097.47" y1="1080" x2="1097.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1235 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1098.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 960 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1096.87 1079.87)" stroke="#222222"></line>
<line x1="1372.47" y1="1080" x2="1372.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1510 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1373.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1235 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1371.87 1079.87)" stroke="#222222"></line>
<line x1="1647.47" y1="1080" x2="1647.47" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(-0.245532 -0.969388 0.962055 -0.272854 1785 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(0.24618 -0.969224 0.961854 0.273564 1648.13 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1510 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1646.87 1079.87)" stroke="#222222"></line>
<line y1="-0.5" x2="558.084" y2="-0.5" transform="matrix(0.245532 -0.969388 -0.962055 -0.272854 1785 541)" stroke="#222222"></line>
<line y1="-0.5" x2="555.983" y2="-0.5" transform="matrix(-0.24618 -0.969224 -0.961854 0.273564 1921.87 1079.87)" stroke="#222222"></line>
                                                            </svg>
                                             </div>
                              </div>
               </div>


               {/* this is the world map section */}


               <div className='w-full h-[150vh] bg-[#D7D7D7] relative z-[11] pt-48'>
                                                            <div className='w-full h-[10vh] flex pl-[114px]'>
                                                                           <div className='w-[45%] h-full'>
                                                                                          <p className='text-[13px] tracking-wide f1 font-light  opacity-80 mb-10'>Winner of international hackathons</p>
                                                                           </div>
                                                                           <div className='w-[55%] h-full'>
                                                                           <div className='f1 text-4xl mb-10 opacity-80'>
                                                                           <h1 className='mb-3'>Students abroad,</h1>
                                                                           <h1>From worldwide.</h1>
                                                            </div>
                                                                           </div>
                                                            </div>

                                                            <div className='w-full h-[120vh]  flex justify-center items-start'>
                                                                           <div className='w-[82%] h-[100%]'>
                                                                           <img className='w-full h-full object-containt' src="https://cdn.prod.website-files.com/651ab5b074523bab8bac8cc8/651d3247b7d7fac81152b4eb_client%20geography.svg" alt="not showing" />
                                                                           </div>
                                                            </div>
               </div>

               {/* this is the footer section */}

               <motion.div  className='w-full overflow-hidden h-screen text-white relative bg-black' 
               initial={{opacity:0.5}}
               whileInView={{opacity:1}}
               transition={{duration:1.5,ease:Power4.easeIn}}
               >
                
                                              <div data-scroll data-scroll-speed="-1" className='pt-96 relative'>
         
                                                            <div className='pl-[114px]'>
                                                                           <p className='text-[14px] tracking-wide f1 font-light text-white opacity-80 mb-10'>Helping ambitious Students conquer</p>
                                                            </div>

                                                            <div>
                                                                           <p className='text-7xl w-full whitespace-nowrap marque opacity-80 absolute top-[50%]'>Have a project idea in mind? send me a message Have a project idea in mind? send me a message Have a project idea in mind? send me a message</p>
                                                            </div>

                                                            <div className='w-full h-[50vh] flex mt-28'>
                                                            <div className='w-[70%] h-full f3 pl-[114px] flex flex-col pt-20 gap-32 '>
                                                                           <div>
                                                                                          <p className='text-xs opacity-30'>Email</p>
                                                                                          <p className='text-xs opacity-80'>contact us @nikoChan.org</p>
                                                                           </div>
                                                                           <div>
                                                                           <p className='text-xs opacity-30'>NikoChan</p>
                                                                           <p className='text-xs opacity-30'>downs256</p>
                                                                           </div>
                                                            </div>
                                                            <div className='w-[30%] pt-16 h-full '>
                                                                           <div className='w-full h-[50%] flex gap-28'>
                                                                                          <div>
                                                                                          <p className='text-xs opacity-30 mb-5'>Socials</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>instagram</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>twitter</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>github</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>linkdIn</p>
                                                                                          </div>
                                                                                          <div>
                                                                                          <p className='text-xs opacity-30 mb-5'>Legals</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>resume</p>
                                                                                          <p className='text-xs opacity-80 mb-3 capitalize'>terms & conditions</p>
                                                                                          
                                                                                          </div>

                                                                           </div>
                                                                           <div className='w-full text-right pr-32 pt-5'>
                                                                           <p className='text-[10px] opacity-30 mb-5'>All rights reserved</p>
                                                                           </div>
                                                            </div>
                                                            </div>
                                                            </div>
               </motion.div>

               {/* footer ends */}
    </div>
  )
}

export default Landing