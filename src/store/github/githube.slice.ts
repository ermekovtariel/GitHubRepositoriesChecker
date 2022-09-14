import { createSlice } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rfk';

interface GithubeState {
  favorites: string[];
}
const initialState: GithubeState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubeSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const githubActions = githubeSlice.actions;
export const githubReducers = githubeSlice.reducer;
