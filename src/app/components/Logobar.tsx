import React from 'react'
import Image from 'next/image'
import Google from '../../../public/images/Google';
import Nike from '../../../public/images/Nike';
import Samsung from '../../../public/images/Samsung';
import Apple from '../../../public/images/Apple';
import Adidas from '../../../public/images/Adidas';
const Logobar = () =>
{
    const svgImages = [ Google, Nike, Samsung, Apple, Adidas ]
    return (
        <div className=' py-[42px] px-[68px]  '>
            <div className="flex justify-between items-center">
                { svgImages.map( ( Logo, index ) =>
                {
                    return (
                        <Logo key={ index } />
                    )
                } ) }
            </div>

        </div>
    )
}

export default Logobar
