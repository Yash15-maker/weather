import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavoriteCity: (state, action) => {
      const city = action.payload;
      if (!state.some(favCity => favCity.id === city.id)) {
        state.push(city);
      }
    },
    removeFavoriteCity: (state, action) => {

      console.log(action.payload.id)
      return state.filter(city => city.id !== action.payload.id);
    },
  },
});

export const { addFavoriteCity, removeFavoriteCity } = favoriteSlice.actions;
export default favoriteSlice.reducer;
