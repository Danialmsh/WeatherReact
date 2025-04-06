import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from "./weather/weatherReducer";



const store = configureStore({ reducer: weatherReducer })

export default store;