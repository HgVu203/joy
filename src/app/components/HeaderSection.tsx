import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const HeaderSection = () =>
{
    return (
        <div className='px-14 py-[42px]' id='about'>
            <div className="flex justify-between items-center">
                <div className="space-y-12 font-semibold max-w-[620px]">
                    <div className="space-y-6 ">
                        <span className='text-fs20'>Branding | Image making</span>
                        <h3 className='text-[68px]'>Visual Designer</h3>
                        <span className='font-normal'>This is a template Figma file, turned into code using Anima.
                            Learn more at AnimaApp.com</span>
                    </div>
                    <div className="">
                        <Link href="#contact" className='py-6 px-16 bg-[#2D2D2D] text-white text-fs20 '>Contact</Link>
                    </div>
                </div>
                <div className="">
                    <Image className='object-cover object-center bg-white' src="/images/bg-header.png" alt='' width={ 480 } height={ 360 } />
                </div>
            </div>
        </div>
    )
}

export default HeaderSection
