import { createSlice } from "@reduxjs/toolkit";
import { SistemasRiego } from "../../entities/sistemasRiego";

const initialRiegoState = { values: [] as SistemasRiego[] };
const initialSwitchState = { switchValues: [] as boolean[] };

export const riegoSlice = createSlice({
    name: 'riego',
    initialState: {
        riego: initialRiegoState,
        switchValues: initialSwitchState.switchValues
    },
    reducers: {
        setRiego: (state, action) => {
            state.riego = action.payload;
        },
        setChangeSwitch: (state, action) => {
            const { index, newState, groupName } = action.payload;
            const riego = state.riego.values.find((riego) => riego.name === groupName);
            if (riego) {
                riego.values[index].state = newState;
            }
        }
    }
})

export const { setRiego, setChangeSwitch } = riegoSlice.actions;
