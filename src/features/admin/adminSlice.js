import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        createModal: false,
        deleteConfirm: {
            show: false,
            id: null,
        },
    },
    reducers: {
        createModalToggle: (state) => {
            state.createModal = !state.createModal;
        },
        deleteConfirmToggle: (state, payload) => {
            state.deleteConfirm.show = !state.deleteConfirm.show;
            payload.payload ? (
                state.deleteConfirm.id = payload.payload 
            ) : (
                state.deleteConfirm.id = null
            ); 
        },
    }
});

export const { createModalToggle, deleteConfirmToggle } = adminSlice.actions;

export default adminSlice.reducer;