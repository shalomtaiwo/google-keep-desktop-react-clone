import React, { useState } from "react";

const Note = (props) => {
  const {toggleModal, note, setSelectedNote} = props;
   const noteHandleClick = (e) => {
    toggleModal();
    setSelectedNote(note);
  };

  const [tooltip, setTooltip] = useState(false);

  const footerOnHover = () => {
    setTooltip(true);
  };

  const footerOnHoverOut = () => {
    setTooltip(false);
  };
  const deleteNoteHandler = () => {
      props.deleteNote(note.id);
  };

  return (
    <div
      className="note"
      id={note.id}
      onClick={noteHandleClick}
      onMouseOver={footerOnHover}
      onMouseOut={footerOnHoverOut}
    >
        <span className="material-icons check-circle" style={{visibility: tooltip ? "visible" : "hidden"}}>check_circle</span>
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
        <div className="note-footer" style={{visibility: tooltip ? "visible" : "hidden"}}>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              add_alert
            </span>
            <span className="tooltip-text">Remind me</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              person_add
            </span>
            <span className="tooltip-text">Collaborator</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              palette
            </span>
            <span className="tooltip-text">Change Color</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              image
            </span>
            <span className="tooltip-text">Add Image</span>
          </div>
          <div className="tooltip" id="archive" onClick={deleteNoteHandler}>
            <span className="material-icons-outlined hover small-icon">
              archive
            </span>
            <span className="tooltip-text">Archive</span>
          </div>
          <div className="tooltip">
            <span className="material-icons-outlined hover small-icon">
              more_vert
            </span>
            <span className="tooltip-text">More</span>
          </div>
        </div>
    </div>
  );
};
export default Note;
