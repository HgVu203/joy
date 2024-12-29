import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export type TCount = {
    count: number
}
const initialState = {
    count: 0
}

const CountSlice = createSlice( {
    name: 'count',
    initialState,
    reducers: {
        increment ( state: TCount )
        {
            state.count += 1
        },
        decrement ( state )
        {
            state.count -= 1
        }
    }
} )

export const { increment, decrement } = CountSlice.actions;
export default CountSlice.reducer;

