import React from 'react'
import Image from 'next/image'

type GalleryProps = {
    gallery: {
        image: string,
        title: string,
        description: string
    }
}
const GalleryCard = ( { gallery }: GalleryProps ) =>
{
    return (
        <div className="space-y-6">
            <Image src={ gallery.image } alt={ gallery.title } quality={ 100 } width={ 400 } height={ 400 } className="h-[330px] w-full object-cover" />
            <div className="">
                <h3 className='text-fs20 font-semibold'>{ gallery.title }</h3>
                <span>{ gallery.description }</span>
            </div>
        </div>
    )
}

export default GalleryCard
