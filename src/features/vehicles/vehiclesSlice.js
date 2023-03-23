import { createSlice } from "@reduxjs/toolkit";

export const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState: {
        allVehicles: [],
        currentVehicles: [],
        vehicleLog: [],
    },
    reducers: {
        setAllVehicles: (state, payload) => {
            state.allVehicles = payload.payload;
        },
        setCurrentVehicles: (state, payload) => {
            state.currentVehicles = payload.payload;
        },
        setVehicleLog: (state, payload) => {
            state.vehicleLog = payload.payload;
        },
    },
});

export const { setAllVehicles, setCurrentVehicles, setVehicleLog } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;