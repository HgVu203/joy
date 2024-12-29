import TodoAdd from '@/app/components/Todos/TodoAdd'
import TodoList from '@/app/components/Todos/TodoList'
import Image from 'next/image'
import React from 'react'

const Todo = () =>
{
    return (
        <div className='bg-[#987EFF] text-black w-screen h-screen p-10 overflow-hidden '>
            <h1 className='text-center text-[24px] font-semibold mb-10'>CÔNG VIỆC CỦA TÔI</h1>
            <div className="flex gap-x-20">
                <div className="flex-1 space-y-10">
                    <TodoAdd />
                    <Image className='w-full' src={ "https://th.bing.com/th/id/OIP.RLlsEmTcgVodJNxYcMreSgHaD1?rs=1&pid=ImgDetMain" } alt='' width={ 1000 } height={ 500 } />
                </div>
                <div className="flex-1">
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default Todo
