import { createSlice } from "@reduxjs/toolkit";
import { SistemasRiego } from "../../entities/sistemasRiego";

interface RiegoState {
    riego: SistemasRiego | null
}

const initialState = { riego: null }

export const riegoSlice = createSlice({
    name: 'riego',
    initialState: initialState,
    reducers: {
        setRiego: (state, action) => {
            state.riego = action.payload;
        }
    }
})

export const { setRiego } = riegoSlice.actions;