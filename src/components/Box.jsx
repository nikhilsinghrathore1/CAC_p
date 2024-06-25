import React from 'react'

const Box = ({mainText , subText,role,agency}) => {
  return (
    <div className='w-[35%] h-[90vh] border-[1px] border-white pt-1 pb-5 pl-4 pr-8'>
               <div className='w-full  h-1/2 leading-none'>
                              <h1 className='f7 uppercase text-[115px]'>{mainText[0]}</h1>
                              <h1 className='f7 uppercase leading-none -mt-4 -mb-4 text-[115px]'>{mainText[1]}</h1>
                              {mainText[2]?
                              <h1 className='f7 uppercase text-[115px]'>{mainText[2]}</h1>:<h1 className='mb-5'></h1>
               }
                              <p className='text-[15px] w-[70%] leading-[23px] f8 opacity-90'>{subText}</p>
               </div>

               <div className='w-full h-1/2 flex items-end justify-between'>
                              <div className=''>
                                             <h1 className='text-[25px] font-semibold f8 tracking-tight'>Role</h1>
                                             <p className='text-[15px] opacity-80'>{role[0]}</p>
                                             <p className='text-[15px] opacity-80'>{role[1]}</p>
                              </div>
                              
                              <div className=''>
                                             <h1 className='text-[20px] font-semibold f8 tracking-tight'>Agency</h1>
                                             <p className='text-[15px] opacity-80'>{agency[0]}</p>
                                             <p className='text-[15px] opacity-80'>{agency[1]}</p>
                              </div>

               </div>
    </div>
  )
}

export default Box