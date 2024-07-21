import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    output: null
}

const outputSlice = createSlice({
    name: 'output',
    initialState,
    reducers: {
        setOutputs: (state, action) => {
            state.output = action.payload;
        }
    }
})

export const { setOutputs } = outputSlice.actions;
export default outputSlice.reducer;