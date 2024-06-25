import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Marquess = ({num}) => {
  return (
    <div>
               <div className={`w-full py-5 px-2 flex items-center ${num===1?"marque":num===2?"marque1":"marque2"} text-7xl f1 gap-8`}>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Research</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Exploration</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Branding</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Strategy</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>development</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Creative </h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Research</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Exploration</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Branding</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>Strategy</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5'>
                                             <h1 className='opacity-80'>development</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
                              <div className='flex items-center gap-5 flex-shrink-0'>
                                             <h1 className='opacity-80'>Creative</h1>
                                             <GoArrowRight className="text-red-500"/>
                              </div>
               </div>
    </div>
  )
}

export default Marquess