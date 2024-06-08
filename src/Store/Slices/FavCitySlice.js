import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { cities: [], selectCity: null },
  reducers: {
    addFavoriteCity: (state, action) => {
      const city = action.payload;
      console.log(city.id)
      if (!state.cities.some(favCity => favCity.name === city.name)) {
        state.cities.push(city);
      }
    },
    removeFavoriteCity: (state, action) => {
      console.log(action.payload.id)
      return state.filter(city => city.id !== action.payload.id);
    },
    selectFavCity: (state, action) => {
      console.log(action.payload.name)
      console.log(state.selectCity = action.payload.name)
      return state.selectCity = action.payload

    }
  },
});

export const { addFavoriteCity, removeFavoriteCity, selectFavCity } = favoriteSlice.actions;
export default favoriteSlice.reducer;
