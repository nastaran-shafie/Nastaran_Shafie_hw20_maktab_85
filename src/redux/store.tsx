import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateInterFace } from "../interface/interface";
import { configureStore } from "@reduxjs/toolkit";

const initialState: InitialStateInterFace = {
  user: {
    name: "",
    email: "",
    position: "",
    phone: 0,
    resume: "",
  },
  login: false,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    showUser(state, action: any) {
      state.user = action.payload.user;
      state.login = action.payload.login;
    },
  },
});

export const formdispatch = formSlice.actions;

const store = configureStore({
  reducer: { form: formSlice.reducer },
});

export default store;
