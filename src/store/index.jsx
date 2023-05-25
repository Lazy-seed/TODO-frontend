import { configureStore } from "@reduxjs/toolkit";
import todolistSlice from "./todos/todoSlice";

const store = configureStore({
    
    reducer: { todolist: todolistSlice.reducer }
})

export default store;

