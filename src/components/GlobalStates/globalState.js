import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 5,
}

export const globalSate = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        increment: (state) => {
            console.log("inside function", state)

            state.value = state.value + 5;
        },
        decrement: (state) => {
            state.value = state.value - 5
        }
    }
})

export const { increment, decrement } = globalSate.actions

export default globalSate.reducer