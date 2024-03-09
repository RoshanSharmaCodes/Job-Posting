import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

export default function Newsletter() {
  return (
    <div>
        <div className='mb-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText />
                Get latest Updates!
            </h3>
            <p className='text-primary/75 text-base mb-4'>I know it's quite frustrating to find a perfect job. But this newsletter will give you edge over 80% Job Finders.</p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type="submit" value="Subscribe" className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>

        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket />
                Get Notice Faster!
            </h3>
            <p className='text-primary/75 text-base mb-4'>This could be the first step towards your success, Hurry Up and Let's get your a Remote Job.</p>
            <div className='w-full space-y-4'>
                <input type="submit" value="Upload Resume" className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
    </div>
  )
}
