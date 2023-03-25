import { createSlice } from "@reduxjs/toolkit";

export const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState: {
        allVehicles: [],
        currentVehicles: [],
        vehicleLog: [],
        numberOfVehiclesInGarage: 0,
    },
    reducers: {
        setAllVehicles: (state, { payload }) => {
            state.allVehicles = payload;
        },
        setCurrentVehicles: (state, { payload }) => {
            state.currentVehicles = payload;
            state.numberOfVehiclesInGarage = payload.length;
        },
        setVehicleLog: (state, { payload }) => {
            state.vehicleLog = payload;
        },
    },
});

export const { setAllVehicles, setCurrentVehicles, setVehicleLog } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;