import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        createModal: false,
        deleteConfirm: {
            show: false,
            id: null,
        },
        updateModal: {
            show: false,
            id: null,
        },
    },
    reducers: {
        createModalToggle: (state) => {
            state.createModal = !state.createModal;
        },
        deleteConfirmToggle: (state, { payload }) => {
            state.deleteConfirm.show = !state.deleteConfirm.show;
            state.deleteConfirm.id = payload || null; 
        },
        updateModalToggle: (state, { payload }) => {
            state.updateModal.show = !state.updateModal.show;
            state.updateModal.id = payload || null; 
        },
    }
});

export const { createModalToggle, deleteConfirmToggle, updateModalToggle } = adminSlice.actions;

export default adminSlice.reducer;