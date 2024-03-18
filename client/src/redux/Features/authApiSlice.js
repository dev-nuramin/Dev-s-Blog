import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// user signup slice
export const userSignupSlice = createAsyncThunk(
  "auth/userSignupSlice",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/auth",
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
