import { createSlice } from "@reduxjs/toolkit";



const todolistSlice = createSlice({
    name: "TODO_LIST",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            var currentdate = new Date();
            state.push({ 'title': action.payload, 'job': "undone", 'date': currentdate })
        },
        delTodo(state, action) {
            state.splice(action.payload, 1);
        },
        doneTodo(state, action) {

            const id = action.payload;
            { state[id].job === 'undone' ? state[id].job = 'done' : state[id].job = 'undone'; }








        },
    }



})


export default todolistSlice;
export const { addTodo, delTodo, doneTodo } = todolistSlice.actions;


