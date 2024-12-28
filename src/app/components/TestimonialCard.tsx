import React from 'react'
import Image from 'next/image'
import Star from '../../../public/images/Star'
type TestimonialProps = {
  testimonial: {
    title: string,
    image: string,
    name: string,
    work: string
  }
}
const TestimonialCard = ( { testimonial }: TestimonialProps ) =>
{
  return (
    <div className="p-[42px] bg-[#F3F3F3] space-y-[68px]">
      <p className='text-fs20 font-semibold'>{ testimonial.title }</p>
      <div className="flex gap-4">
        <Image className='size-[50px] rounded-full' src={ testimonial.image } alt='testimonial' width={ 100 } height={ 100 } />
        <div className="space-y-[11px]">
          <div className="flex gap-x-[6px]">
            { Array.from( { length: 5 } ).map( ( _, index ) =>
            {
              return (
                <Star key={ index } />
              )
            } ) }
          </div>
          <div className="flex flex-col">
            <span className='font-semibold text-fs20'>{ testimonial.name }</span>
            <span>{ testimonial.work }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
