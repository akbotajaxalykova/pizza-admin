import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from './dishesSlice';
const store = configureStore({
    reducer: {
        dishes: dishesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
