import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/authSlice"

const createStore = configureStore({
    reducer: {
        newUser: authReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      devTools: true,
})

export default createStore;