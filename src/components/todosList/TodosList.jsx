import React, { useEffect } from 'react'
import './todosList.scss'
import trash from './img/trash.png'
import trash2 from './img/trash2.png'
import tick from './img/tick.png'
import { useDispatch, useSelector } from 'react-redux'
import { delTodo, updateTodo, getAllTodo } from '../../store/todos/todoSlice'


export default function TodosList({ filterTodo }) {
  const dispatch = useDispatch();



  const allTask = useSelector((state) => state.todolist.data)
  const isLoading = useSelector((state) => state.todolist.isLoading)
  const error = useSelector((state) => state.todolist.error)

  if (isLoading) {
    return <h1 style={{ fontSize: '40px', paddingTop: '100px' }}>'loading....'</h1>

  }
  if (error) {
    return <h1 style={{ fontSize: '40px', paddingTop: '100px' }}>'error....'{error}</h1>
  }





  return (
    <>
      {

        allTask && allTask.map((item) => {
          // const hr = item.date.getHours < 10 ? '0' + item.date.getHours : item.date.getHours;
          // const mn = item.date.getMinutes < 10 ? '0' + item.date.getMinutes : item.date.getMinutes;

          
          if (filterTodo === 'done' || filterTodo === 'a') {
            return (

              <li key={item._id}>
                <div className="circle" onClick={() => dispatch(updateTodo(item._id))}>
                  {item.job === 'done' ? <img src={tick} alt='tick' /> : <div></div>}

                </div>
                <div className="title">
                  <h1 className={`text-title ${item.job === 'done' ? 'ticked' : ''} `}>{item.title} </h1>
                  {/* <h5>{hr}:{mn} am  </h5> */}
                </div>
                <div className="trash" >
                  <img src={trash} alt='del' onClick={() => dispatch(delTodo(item._id))} />
                </div>
              </li>
            )
          }






        })


      }

    </>
  )
}
