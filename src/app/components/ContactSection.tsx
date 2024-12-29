import React from 'react'
import Discord from '../../../public/images/Discord'
import Facebook from '../../../public/images/Facebook'
import Dri from '../../../public/images/Dri'
import Nstagram from '../../../public/images/Nstagram'
import Be from '../../../public/images/Be'


const ContactSection = () =>
{
    return (
        <div className='p-[42px_24px_86px_24px]' id='contact'>
            <div className="space-y-6">
                <h1 className='text-[32px] font-semibold'>Lets work together</h1>
                <div className="space-x-[142px] flex justify-between">
                    <div className="max-w-[570px] space-y-[42px]">
                        <span>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</span>
                        <div className="flex gap-x-6">
                            <Discord />
                            <Facebook />
                            <Dri />
                            <Nstagram />
                            <Be />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <input className='w-full h-[59px] px-6 py-4 bg-[#F3F3F3] placeholder:text-[#2D2D2D]' type="text" placeholder='Name' />
                            <input className='w-full h-[59px] px-6 py-4 bg-[#F3F3F3] placeholder:text-[#2D2D2D]' type="text" placeholder='Email' />
                        </div>
                        <button className='px-16 py-6 bg-[#2D2D2D] text-white text-fs20 font-semibold'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
