import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";

// const URL = 'http://localhost:8000'
const URL = 'https://todo-backend-6trt.onrender.com'

const initialState = {
  data: [],
  isLoading: false,
  error: null,
}

export const getAllTodo = createAsyncThunk(
  'content/getAllTodo',
  async () => {
    const res = await axios.get(`${URL}/api/allTask`, { withCredentials: true })
    return res.data.allTask
  }
)
export const addTodo = createAsyncThunk(
  'content/addTodo',
  async (data) => {
    const res = await axios.post(`${URL}/api/addTask`, { task: data }, { withCredentials: true })
    return res.data.allTask

  }
)

export const updateTodo = createAsyncThunk(
  'content/getAllTodo',
  async (data) => {
    console.log(data);
    const res = await axios.post(`${URL}/api/updateTask`, { id: data }, { withCredentials: true })
    return res.data.allTask

  }
)
export const delTodo = createAsyncThunk(
  'content/delTodo',
  async (data) => {
    const res = await axios.post(`${URL}/api/delTask`, { id: data }, { withCredentials: true })
    return  res.data.allTask
  }
)



const todolistSlice = createSlice({


  name: "TODO_LIST",
  initialState,
  reducers: {
    
  },

  // extrssss
  extraReducers: (builder) => {
    builder.addCase(getAllTodo.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(getAllTodo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })


    // add to do -------------------------
    builder.addCase(addTodo.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload

    })
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })



    // delete -------------------------
    builder.addCase(delTodo.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(delTodo.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload

    })
    builder.addCase(delTodo.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },



})


export default todolistSlice;
// export const { delToo } = todolistSlice.actions;


