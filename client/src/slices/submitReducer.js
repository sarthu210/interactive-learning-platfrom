import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSubmit: false,
    submitData: null
}

export const submitSlice = createSlice({
    name: 'submit',
    initialState,
    reducers: {
        submit: (state, action) => {
            state.submitData = action.payload;
            state.isSubmit = true;
        },
        unsubmit: (state) => {
            state.submitData = null;
            state.isSubmit = false;
        }   
    }
});

export const { submit, unsubmit } = submitSlice.actions;
export default submitSlice.reducer;