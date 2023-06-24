import { useState } from "react";
import styles from '../styles/todoform.module.css'
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/reducers/todoReducer";
const TodoForm=()=> {
const [text,setText]=useState('')
const dispatch=useDispatch();

const handleSubmit=(e)=>{
 e.preventDefault();
dispatch(todoActions.add(text))
 setText('')
//  console.log('done');

}

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="form-control mb-3"
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default TodoForm;
