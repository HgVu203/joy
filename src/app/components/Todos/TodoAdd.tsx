"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addTodo } from '@/lib/Todo/TodoSlice'
const TodoAdd = () =>
{
    const [ inputTodo, setInputTodo ] = React.useState<string>( "" );

    const dispatch = useDispatch();
    const handleAddTodo = ( data: string ) =>
    {
        if ( data.trim() )
        {
            dispatch( addTodo( data ) );
            setInputTodo( "" );
            toast.success( "Thêm thành công" )
        }
        else toast.error( "Thêm không thành công" )
    }
    return (
        <div className="flex items-center gap-4">
            <input value={ inputTodo } onChange={ e => setInputTodo( e.target.value ) } className='border outline-none px-4 py-2 flex-1 rounded-md' type="text" />
            <button onClick={ () => handleAddTodo( inputTodo ) } className='border-2 bg-blue-500 text-white py-2 px-4 rounded-md'>Thêm</button>
        </div>
    )
}

export default TodoAdd
