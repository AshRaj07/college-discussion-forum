import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons'
import React,{useEffect,useState} from 'react'
import db from "../../firebase";
import { useDispatch,useSelector } from 'react-redux'
import { setQuestionInfo,selectQuestionId } from '../../features/counter/questionSlice'
import AnswerModal from '../Modal/AnswerModal'
import "./Post.css"

const Post = ({id,url,question,timestamp,userName,userEmail,userPhoto,user}) => {
    // let temp = url.substring(url.length-11,url.length);

    const dispatch = useDispatch();
    const questionId = useSelector(selectQuestionId);
    const [getAnswer,setGetAnswer] = useState([]);

    useEffect(() => {
        if(questionId){
            db.collection('questions').doc(questionId).collection('answer').orderBy('timestamp','desc').onSnapshot(snapshot => setGetAnswer(snapshot.docs.map((doc) => ({
                id:doc.id,
                answers : doc.data()
            }))))
        }
       console.log(getAnswer)
       // eslint-disable-next-line
    },[questionId])
    
    return (
        <div className="post bg-light shadow" onClick={() => dispatch(setQuestionInfo({
            questionId:id,
            questionName:question
        }))}>
            <div className="post_info">
                <Avatar src={userPhoto} />
                <h5>{userName?userName:userEmail}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <h4>{question}</h4>
                    <AnswerModal question={question} timestamp={timestamp} userName={userName} userEmail={userEmail} />
                </div>
                <img src={url} alt=""  />
                <div className="post_answer">
                    <h6>Answers</h6>
                    <span className='text-muted'>(Click here)</span>
                </div>
                <div className="container-fluid">
                {getAnswer.map(({ ans_id, answers }) => (
            <p key={ans_id} style={{ position: "relative", paddingBottom: "5px" }}>
              {id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />

                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "darkgray" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
                </div>
            </div>
            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOutlined />
                <ChatBubbleOutlineOutlined />
                <div className="post_footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
