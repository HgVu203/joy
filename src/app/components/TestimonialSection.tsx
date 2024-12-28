import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () =>
{
    const testimonial = {
        title: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        image: "/images/client.svg",
        name: "Gemma Nolen",
        work: "Google"
    }
    return (
        <div className='py-[42px] px-6'>
            <div className="space-y-[42px]">
                <h1 className='text-[32px] font-semibold text-center'>Testimonial</h1>
                <div className="grid grid-cols-3 gap-6">
                    { Array.from( { length: 6 } ).map( ( _, index ) =>
                    {
                        return (
                            <TestimonialCard key={ index } testimonial={ testimonial } />
                        )
                    } ) }
                </div>
            </div>
        </div>

    )
}

export default TestimonialSection
