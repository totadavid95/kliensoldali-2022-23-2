/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editor: "",
    selectedIndex: null,
    haikus: [
        `Téged vártalak
Mint hajnali fényt éjjel
Félve-remélve`,
    ],
};

const slice = createSlice({
    name: "haikus",
    initialState,
    reducers: {
        changeText: (state, { payload: haiku }) => {
            state.editor = haiku;
        },
        addHaiku: (state, { payload: haiku }) => {
            state.haikus.push(haiku);
        },
        selectHaiku: (state, { payload: index }) => {
            if (state.haikus[index]) {
                state.selectedIndex = index;
                state.editor = state.haikus[index];
            }
        },
        modifyHaiku: (state, { payload: haiku }) => {
            if (state.selectedIndex !== null && state.haikus[state.selectedIndex]) {
                state.haikus[state.selectedIndex] = haiku;
                state.selectedIndex = null;
            }
        },
        removeHaiku: (state) => {
            if (state.selectedIndex !== null && state.haikus[state.selectedIndex]) {
                state.haikus.splice(state.selectedIndex, 1);
                state.selectedIndex = null;
            }
        },
    }
});

export const haikuReducer = slice.reducer;

export const {
    changeText,
    addHaiku,
    selectHaiku,
    modifyHaiku,
    removeHaiku,
} = slice.actions;

const VOWELS = "öüóőúéáíiueaűo";

export const selectEditor = (state) => {
    const { editor } = state;

    const counts = editor
        .split('\n')
        .map(line => line.split('').filter(char => VOWELS.includes(char)).length);

    return {
        text: editor,
        counts,
        isHaiku: counts.length === 3 && counts[0] === 5 && counts[1] === 7 && counts[2] === 5,
    }
}

export const selectHaikus = (state) => ({
    haikus: state.haikus,
    selectedIndex: state.selectedIndex,
})
