import { createSlice } from "@reduxjs/toolkit";
import { userSignupSlice } from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    error: null,
    isLoading: false,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignupSlice.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userSignupSlice.fulfilled, (state, action) => {
        (state.isLoading = false), (state.user = action.payload.user);
        state.message = action.payload.message;
      })
      .addCase(userSignupSlice.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

//selectors

//action
export const { setMessageEmpty } = authSlice.actions;

// export reducers
export default authSlice.reducer;
