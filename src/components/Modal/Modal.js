import React, {useState} from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Form from "../Form/Form";
import "./Modal.css";

const Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal, editNote, submitNoteHandler} = props;
  const [hasCursor, setHasCursor] = useState(false);

  const closeModal = (e) => {!hasCursor && toggleModal();}
  const handleMouseOverModal = () =>{setHasCursor(true)}
  const handleMouseOutModal = () =>{setHasCursor(false)}

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={closeModal}>
        <div className="modal-content" onMouseOver={handleMouseOverModal} onMouseOut={handleMouseOutModal}>
        <OutsideClickHandler onOutsideClick={submitNoteHandler}>
        <Form edit selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} submitNoteHandler={submitNoteHandler}/>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default Modal;