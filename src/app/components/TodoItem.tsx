import React from 'react'
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";
import { AiOutlineCheck as CompletedIcon } from "react-icons/ai";
type TodoItemProps = {
    todo: {
        id: number;
        title: string;
        completed: boolean;
    };
    onChangeCompleted: () => void;
    onDelete: () => void;
};
const TodoItem = ( { todo, onChangeCompleted, onDelete }: TodoItemProps ) =>
{
    return (
        <div className='w-[95%] p-4 rounded-lg bg-white flex justify-between'>
            { todo.title }
            <div className="flex gap-2 items-center">
                <div onClick={ onChangeCompleted } className="select-none rounded-full border-2 border-black size-6 flex justify-center items-center">
                    { todo.completed && <CompletedIcon /> }
                </div>
                <DeleteIcon onClick={ onDelete } className='size-7' />
            </div>
        </div>
    )
}

export default TodoItem
