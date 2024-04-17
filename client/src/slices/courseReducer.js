import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    isEnroll: false
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        enroll: (state, action) => {
            state.name = action.payload;
            state.isEnroll = true;
        },
        unenroll: (state) => {
            state.name = null;
            state.isEnroll = false;
        }   
    }
})

export const { enroll, unenroll } = courseSlice.actions;
export default courseSlice.reducer;