import { configureStore } from "@reduxjs/toolkit";
import CountSlice, { TCount } from './Count/CountSlice';
import TodoSlice, { TTodoList } from "./Todo/TodoSlice";
export type TStore = {
    count: TCount
    todos: TTodoList
}
export const makeStore = () =>
{
    return configureStore( {
        reducer: {
            count: CountSlice,
            todos: TodoSlice
        }
    } )
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore[ 'getState' ]>
export type AppDispatch = AppStore[ 'dispatch' ]