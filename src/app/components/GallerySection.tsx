import Image from 'next/image'
import React from 'react'
import GalleryCard from './GalleryCard'

const GallerySection = () =>
{
    const gallerys = [
        {
            image: "/images/img1.png",
            title: 'Project title',
            description: 'UI, Art drection'
        },
        {
            image: "/images/img2.png",
            title: 'Project title',
            description: 'UI, Art drection'
        },
        {
            image: "/images/img3.png",
            title: 'Project title',
            description: 'UI, Art drection'
        },
        {
            image: "/images/img4.png",
            title: 'Project title',
            description: 'UI, Art drection'
        },
        {
            image: "/images/img5.png",
            title: 'Project title',
            description: 'UI, Art drection'
        },
        {
            image: "/images/img6.png",
            title: 'Project title',
            description: 'UI, Art drection'
        }

    ]
    return (
        <div className='py-[42px] px-6' id='work'>
            <div className="space-y-[42px]">
                <h1 className='text-[32px] font-semibold text-center'>Latest work</h1>
                <div className="grid grid-cols-3 gap-6">
                    { gallerys.map( ( gallery, index ) =>
                    {
                        return (
                            <GalleryCard key={ index } gallery={ gallery } />
                        )
                    } ) }
                </div>
            </div>
        </div>
    )
}

export default GallerySection
