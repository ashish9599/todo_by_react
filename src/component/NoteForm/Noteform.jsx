import { useState } from "react";
import { useDispatch } from "react-redux";
import { noteActions } from "../../redux/reducers/noteReducer";
function NoteForm({ onCreateNote }) {
  const [noteText, setNoteText] = useState("");
 const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
        dispatch(noteActions.add(noteText));
    setNoteText("");
  
  };

  return (
    <div >
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control border border-primary"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
