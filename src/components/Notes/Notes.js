import "./Notes.css";
import Note from "./Note";
const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;
  return (
    <div className="notes">
      {notes.length === 0 && <p>Notes you add appear here.</p>}
      {notes.length !== 0 &&
        notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))}
    </div>
  );
};

export default Notes;
