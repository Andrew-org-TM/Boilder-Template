import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './UserSlice.js';

const store = configureStore({
    reducer: {
users: UserSlice,
    }
})
export default store;