"use client"
import { decrement, increment } from '@/lib/Count/CountSlice'
import type { TStore } from '@/lib/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Test = () =>
{
    const count = useSelector( ( state: TStore ) => state.count );
    const dispatch = useDispatch();
    return (
        <div className='p-5 flex justify-center items-center gap-10'>
            <button onClick={ () => dispatch( decrement() ) } className='p-4 border-white border'>-</button>
            <span className='w-5 text-center'>{ count.count }</span>
            <button onClick={ () => dispatch( increment() ) } className='p-4 border-white border'>+</button>
        </div>
    )
}

export default Test
