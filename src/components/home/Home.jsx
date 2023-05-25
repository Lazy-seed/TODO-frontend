import React, { useState } from 'react'
import './home.scss'
import trash from './img/trash.png'
import trash2 from './img/trash2.png'
import tick from './img/tick.png'
import TodosList from '../todosList/TodosList'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/todos/todoSlice'

export default function Home() {
  const dispatch = useDispatch()

  const [showAddModal, setshowAddModal] = useState(false);
  const [addingTask, setaddingTask] = useState();
  // const [allTask, setallTask] = useState([]);
  const allTask = useSelector((state) => {
    return state.todolist
  })


  function addTask(obj) {
    dispatch(addTodo(obj));
    setshowAddModal(false)
  }



  return (
    <>
      <div className='home'>
        <div className="top-container">

          <div className="heading">
            <h1>Todo List</h1>
            <div className='btn-grup'>
              <button className='b1'>All</button>
              <button className='b2'>Done</button>
              <button className='b3'>Remain</button>
            </div>
          </div>
        </div>

        <div className="bottom-container">

          <div className="list-container">
            <ul>

              {
                allTask && allTask.map((item, index) => {
                  return (<>
                    <TodosList item={item} id={index} />
                  </>)
                })
              }


            </ul>
          </div>

          <div className="addbtn" onClick={() => setshowAddModal(true)}>+</div>

        </div>

      </div>


      <div className={`addtask_modal_outer ${showAddModal && 'show_addtaskmodal'} `}>
        <div className="addtask_modal">
          <h2>Add task</h2>
          <div className="input">
            <label htmlFor="">Enter your Work</label>
            <input type="text" onChange={(e) => { setaddingTask(e.target.value) }} />
          </div>
          <div className="btn">
            <button onClick={() => { setshowAddModal(false) }}>cancel</button>
            <button onClick={() => addTask(addingTask)}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}
