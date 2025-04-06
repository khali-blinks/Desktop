import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
    reducer : {
        users : usersReducer
    }
})

export * from './thunks/fetchUsers';
// Takes al anmed exports from fetchUsers and makes them available for import from this file