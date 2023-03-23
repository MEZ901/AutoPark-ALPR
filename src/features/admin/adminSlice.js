import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        createModal: false,
    },
    reducers: {
        createModalToggle: (state) => {
            state.createModal = !state.createModal;
        }
    }
});

export const { createModalToggle } = adminSlice.actions;

export default adminSlice.reducer;