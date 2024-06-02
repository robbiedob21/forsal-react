import React from 'react'
import SmallBlock from './small-block'

import cmf from '../resources/images/cmfrunning.webp'
import d3tape from '../resources/images/d3_tape_logo.webp'
import fuelme from '../resources/images/fuelme.webp'
import nougly from '../resources/images/nougly.webp'
import purpose from '../resources/images/purpose.webp'
import skins from '../resources/images/skins.webp'
import sox from '../resources/images/socks.webp';

export default function Sponsors() {
  return (
    <div className='col-span-12 grid grid-cols-12 gap-4'>
        <SmallBlock className='lg:row-span-2 lg:col-span-4'>
          <p className='text-xl xs:text-2xl lg:text-4xl text-center font-medium'>Our Sponsors</p>
        </SmallBlock>
        <SmallBlock href='https://cmfrunning.nz/' src={cmf} className='bg-white'/>
        <SmallBlock href='https://www.d3tape.com/' src={d3tape} className='bg-black'/>
        <SmallBlock href='https://fuelme.co.nz/' src={fuelme} className='bg-[#16afd7]'/>
        <SmallBlock href='https://nougly.nz/' src={nougly}  className='bg-white'/>
        <SmallBlock href='https://purposeperformancewear.com/' src={purpose}  className='bg-white'/>
        <SmallBlock href='https://www.skins.co.nz/' src={skins}/>
        <SmallBlock href='https://soxfootwear.nz/' src={sox}  className='bg-black'/>
    </div>
  )
}
