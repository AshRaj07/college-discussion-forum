import { Avatar, Input } from '@material-ui/core';
import { ExpandMore, Link, PeopleAltOutlined } from '@material-ui/icons';
import React,{useState} from 'react'
import { Button, Modal } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import "./QuestionModal.css"
import db from '../../firebase';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

const QuestionModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = useSelector(selectUser);

    const [inputText,setInputText] = useState("");
    const [inputUrl,setInputUrl] = useState("");

    const onSubmit =  (event) => {
        event.preventDefault();
        db.collection("questions").add({
            question:inputText,
            url:inputUrl,
            timestamp:new Date(),
            user:user,
        })
        console.log("user created")
        setInputText("");
        setInputUrl("");
        setShow(false);
      };
  
    return (
      <>
        <Button variant={props.cname} onClick={handleShow}>
          {props.name}
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="title">Add Question</Modal.Title>
            <Modal.Title className="title mx-3">Share Link</Modal.Title>
          </Modal.Header>
          <form onSubmit={onSubmit}>
          <Modal.Body>
          <div className="modal_info">
              <Avatar src={user.photo} className="avatar"/>
                <div className="modal_p">
                <p>{user.displayName?user.displayName:user.email}<strong className="mx-1">asked</strong></p>
                            
                </div>
              <div className="modal_scope">
                <PeopleAltOutlined />
                <ExpandMore />
              </div>
          </div>
          <div className="modal_inputText">
              <Input type="text" placeholder="Start your question with 'What', 'How', 'Why' etc." value={inputText} onChange={(event) => setInputText(event.target.value)} required/>
              <div className="modal_inputLink">
              <Link />
              <input type="text" placeholder="Optional: include a link that gives context" value={inputUrl} onChange={(event)=> setInputUrl(event.target.value)} />
          </div>
          </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">Add Question</Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
}

export default QuestionModal
