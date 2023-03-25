import { createSlice } from "@reduxjs/toolkit";

export const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState: {
        allVehicles: [],
        currentVehicles: [],
        vehicleLog: [],
    },
    reducers: {
        setAllVehicles: (state, { payload }) => {
            state.allVehicles = payload;
        },
        setCurrentVehicles: (state, { payload }) => {
            state.currentVehicles = payload;
        },
        setVehicleLog: (state, { payload }) => {
            state.vehicleLog = payload;
        },
    },
});

export const { setAllVehicles, setCurrentVehicles, setVehicleLog } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;