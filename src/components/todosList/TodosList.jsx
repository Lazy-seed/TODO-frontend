import React from 'react'
import './todosList.scss'
import trash from './img/trash.png'
import trash2 from './img/trash2.png'
import tick from './img/tick.png'
import { useDispatch } from 'react-redux'
import { delTodo ,doneTodo} from '../../store/todos/todoSlice'

export default function TodosList({ item, id }) {

  const dispatch = useDispatch();

  const hr = item.date.getHours() < 10 ? '0' + item.date.getHours() : item.date.getHours();
  const mn = item.date.getMinutes() < 10 ? '0' + item.date.getMinutes() : item.date.getMinutes();

 

  return (
    <>


      <li>
        <div className="circle" onClick={()=>dispatch(doneTodo(id))}>
          {item.job === 'done' ?<img src={tick} alt='tick' /> :<div></div> }

        </div>
        <div className="title">
          <h1 className={`text-title ${item.job === 'done' ? 'ticked' : ''} `}>{item.title} </h1>
          <h5>{hr}:{mn} am  </h5>
        </div>
        <div className="trash" >
          <img src={trash} alt='del' onClick={() => dispatch(delTodo(id))} />
        </div>
      </li>
    </>
  )
}
