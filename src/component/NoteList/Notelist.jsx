import styles from './notelist.module.css'
import { useSelector } from 'react-redux';
import { noteActions } from '../../redux/reducers/noteReducer';
import { useDispatch } from 'react-redux';
import { noteSelector } from '../../redux/store';
function NoteList() {
   const notes=useSelector(noteSelector)
   console.log("Its note",notes)
  const dispatch=useDispatch();
   return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.title}</p>
            <button className="btn btn-danger"
            onClick={()=>dispatch(noteActions.remove(index))}
            >Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
