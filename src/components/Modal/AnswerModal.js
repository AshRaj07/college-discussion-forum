import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { selectQuestionId, selectQuestionName } from '../../features/counter/questionSlice'
import db from "../../firebase";
import "./QuestionModal.css";
import "./AnswerModal.css"

const AnswerModal = ({question,timestamp,userName,userEmail}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [answer,setanswer] = useState("");
  const questionId = useSelector(selectQuestionId);
  const user = useSelector(selectUser);
  const questionName = useSelector(selectQuestionName);

  const onSubmit = (e) => {
      e.preventDefault();
      if(questionId){
          db.collection('questions').doc(questionId).collection('answer').add({
              questionId:questionId,
              timestamp:new Date(),
              answer:answer,
              user:user
          })
          console.log(questionId,questionName);
          setanswer("");
          setShow(false);
      }
  }

  return (
    <>
      <Button variant="btn btn-primary rounded" onClick={handleShow}>
        Answer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="display-6">{question}</Modal.Title>
        </Modal.Header>
        <p className="mx-auto my-3 ">
          asked by <span className="name badge bg-dark">{userName?userName:userEmail}</span> on {" "}
          <span className="strong badge bg-secondary">{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </p>
        <form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="form-floating">
        
            <textarea
            value={answer}
            onChange={(event) => setanswer(event.target.value)}
              className="form-control h-100"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              required
            ></textarea>
            <label htmlFor="floatingTextarea2">Discuss</label>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">Add Answer</Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AnswerModal;
