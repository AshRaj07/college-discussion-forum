import React,{useState,useEffect} from 'react'
import db from '../../firebase'
import Post from '../Post/Post'
import "./Feed.css"
import Feedquestion from './Feedquestion'
const Feed = () => {
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        db.collection('questions').orderBy('timestamp','desc').onSnapshot(snapshot => setposts(snapshot.docs.map((doc)=>({
            id:doc.id,
            question:doc.data()
        }))))
    })
    return (
        <div className="feed">
            <Feedquestion />
            {
                posts.map(({id,question}) =>(
                    <Post 
                    key={id}
                    id={id}
                    url = {question.url}
                    question = {question.question}
                    timestamp = {question.timestamp}
                    userName ={question.user.displayName}
                    userEmail = {question.user.email}
                    userPhoto ={question.user.photo}
                    />
                ))
            }
        </div>
    )
}

export default Feed
