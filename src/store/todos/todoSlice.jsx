import { createSlice } from "@reduxjs/toolkit";



const todolistSlice = createSlice({

    name: "TODO_LIST",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            var currentdate = new Date();
            state.push({ 'title': action.payload, 'job': "undone", 'date': currentdate })
        },
        delTodo(state, action) { },
        doneTodo(state,action){
            
        },
    }



})


export default todolistSlice;
export const { addTodo, delTodo } = todolistSlice.actions;


