import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    levels: null
}

export const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        setLevel: (state, action) => {
            state.levels = action.payload;
        }
    }
})

export const { setLevel } = levelsSlice.actions;
export default levelsSlice.reducer;