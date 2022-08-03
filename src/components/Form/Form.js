import React, { useState } from "react";
import { uid } from "uid";
import OutsideClickHandler from 'react-outside-click-handler';

import "./Form.css";
const Form = (props) => {
  const {edit, selectedNote, toggleModal} = props;
  const [focused, setFocused] = useState(edit);
  const focusNoteHandler = () => {
    setFocused(true);
  };

  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    setFocused(true) 
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
    setFocused(true)
  };
  const submitNoteHandler = (e) => {
    e.preventDefault();
    if(!edit){
      const note = {
        id: uid(25),
        title,
        text,
      };
      if(text !== ''|| title !== ''){
        props.addNote(note);
      }
      setFocused(false)
    }else{
      props.editNote({
        id: selectedNote.id,
        title,
        text,
      });
      toggleModal();
    }

    setTitle("");
    setText("");
  };


    return (
      <div >
        <OutsideClickHandler onOutsideClick={submitNoteHandler}>
        <div className="form-container active-form" id="formActive" onClick={focusNoteHandler}>
          <form
            onSubmit={(submitNoteHandler)}
            className={!focused ? '' : 'form'}
          >
            {focused && (
              <input
              type="text"
              onChange={titleChangeHandler}
              value={title || ''}
              className="note-title"
              placeholder="Title"
            />
            )}
            <input
              className="note-text"
              type="text"
              onChange={textChangeHandler}
              value={text || ''}
              placeholder="Take a note..."
            />

            {
              focused ?
<div className="form-actions">
              <div className="icons">
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
                <div className="tooltip">
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
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-icons-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">Close</button>
            </div>

              :

     <div className="form-actions">
    <div className="tooltip">
      <span className="material-icons-outlined hover">check_box</span>
      <span className="tooltip-text">New List</span>
    </div>
    <div className="tooltip">
      <span className="material-icons-outlined hover">brush</span>
      <span className="tooltip-text">New Drawing</span>
    </div>
    <div className="tooltip">
      <span className="material-icons-outlined hover">image</span>
      <span className="tooltip-text">New Image</span>
    </div>
  </div>
            }
            
          </form>
        </div>
        </OutsideClickHandler>
      </div>
    );

};

export default Form;
