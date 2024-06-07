import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./Slices/WeatherSlice";
import FavCitySlice from "./Slices/FavCitySlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    favorites: FavCitySlice,
  },
});

export default store;
