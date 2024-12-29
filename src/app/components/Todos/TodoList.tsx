"use client"
import React from 'react'
import { TStore } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'
import { changeCompletedTodo, deleteTodo } from '@/lib/Todo/TodoSlice'
import TodoItem from './TodoItem'
const TodoList = () =>
{
    const [ selectJob, setSelectJob ] = React.useState<string>( "all" );
    const todoList = useSelector( ( state: TStore ) => state.todos );
    const dispatch = useDispatch();
    const filterTodo = todoList.todos.filter( ( todo ) =>
    {
        if ( selectJob === "completed" ) return todo.completed;
        if ( selectJob === "not_completed" ) return !todo.completed;
        return true;
    } )
    const handleChangeCompleted = ( id: number ) =>
    {
        dispatch( changeCompletedTodo( id ) );
    }
    const handleDeleteTodo = ( id: number ) =>
    {
        dispatch( deleteTodo( id ) );
    }
    return (
        <div className='space-y-6'>
            <div className="space-x-2">
                <span className='font-semibold'>Danh sách công việc</span>
                <select
                    className="border px-4 py-2 rounded-md outline-none"
                    onChange={ ( e ) => setSelectJob( e.target.value ) }
                >
                    <option value="all">Tất cả</option>
                    <option value="completed">Việc đã làm</option>
                    <option value="not_completed">Việc chưa làm</option>
                </select>
            </div>
            <div className="flex flex-col gap-4 cursor-pointer overflow-y-auto max-h-[70vh]">
                { filterTodo.map( ( todo ) => (
                    <TodoItem
                        key={ todo.id }
                        todo={ todo }
                        onChangeCompleted={ () => handleChangeCompleted( todo.id ) }
                        onDelete={ () => handleDeleteTodo( todo.id ) }
                    />
                ) ) }
            </div>
        </div>
    )
}

export default TodoList
