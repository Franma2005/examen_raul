import { createSlice } from "@reduxjs/toolkit";
import { SistemasRiego, Value } from "../../entities/sistemasRiego";

export interface riego {
    name: string,
    values: Value[]
}

const grupos = new Array<riego>;

export const riegoSlice = createSlice({
    name: 'riego',
    initialState: {
        grupos
    },
    reducers: {
        setRiego: (state, action) => {
            state.grupos = action.payload;
        },
    }
})

export const { setRiego } = riegoSlice.actions;
