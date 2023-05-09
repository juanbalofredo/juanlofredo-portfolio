import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audi: "ES",
  darkMode: "on",
};

export const bolsilloPersist = createSlice({
  name: "bolsilloPersist",
  initialState,
  reducers: {
    changeAudi(state) {
      if (state.audi === "ES") {
        state.audi = "EN";
      } else {
        state.audi = "ES";
      }
    },
    changeTheme(state) {
      if (state.darkMode === "on") {
        state.darkMode = "off";
      } else {
        state.darkMode = "on";
      }
    },
  },
});

export const { changeTheme, changeAudi } = bolsilloPersist.actions;
export default bolsilloPersist.reducer;
