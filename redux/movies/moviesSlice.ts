import { MoviePropTypes } from "@/db";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface MoviesState {
  movies: MoviePropTypes[];
  loading: boolean;
}

export const GET_MOVIES_BASEURL = "https://silent-holy-mum.glitch.me/movies";

export const getMovies = createAsyncThunk("movies/GetMovies", async () => {
  try {
    const response = await axios.get(GET_MOVIES_BASEURL);
    return response.data;
  } catch (error) {
    return [];
  }
});

const initialState: MoviesState = {
  movies: [],
  loading: false,
};

export const MoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    });
  },
});
export default MoviesSlice.reducer;
