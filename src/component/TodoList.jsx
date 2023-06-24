import styles from '../styles/todolist.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../redux/reducers/todoReducer';
import { todoSelector } from '../redux/store';
const  ToDoList=()=>{
 const todo=useSelector(todoSelector)
 console.log(todo);
const dispatch=useDispatch();
  return (
    <div className={styles.container}>
    <ul>
        {todo.map((todo,index) => (
        <li key={index}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(todoActions.toggle(index))}}
          >Toggle</button>
          <button className="btn btn-success"
          onClick={()=>{dispatch(todoActions.remove(index))}}
          >Delete</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
