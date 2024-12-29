import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: number;
    title: string;
    completed: boolean
}
export type TTodoList = {
    todos: TTodo[];
}
const initialState: TTodoList = {
    todos: [],
}

const TodoSlice = createSlice( {
    name: 'todos',
    initialState,
    reducers: {
        addTodo ( state, action: PayloadAction<string> )
        {
            const newTodo: TTodo = {
                id: Date.now(),
                title: action.payload,
                completed: false
            }
            state.todos.push( newTodo );
        },
        changeCompletedTodo ( state, action: PayloadAction<number> )
        {
            const todoSearch = state.todos.find( ( item ) => item.id === action.payload );
            if ( todoSearch )
            {
                todoSearch.completed = !todoSearch.completed;
            }
        },
        deleteTodo ( state, action: PayloadAction<number> )
        {
            state.todos = state.todos.filter( ( item ) => item.id !== action.payload );
        }
    }
} )
export const { addTodo, changeCompletedTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;