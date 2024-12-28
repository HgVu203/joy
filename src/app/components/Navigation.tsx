import Link from 'next/link'
import React from 'react'

const Navigation = () =>
{
    return (
        <div className='px-[42px] py-6 flex justify-between font-semibold'>
            <span className='text-fs20'>Logo</span>
            <ul className='flex gap-x-6'>
                <li><Link href={ "#about" }>About</Link></li>
                <li><Link href={ "#work" }>Work</Link></li>
                <li><Link href={ "#contact" }>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navigation
