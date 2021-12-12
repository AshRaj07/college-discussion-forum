import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'
import "./Feedquestion.css"

const Feedquestion = () => {

    const user = useSelector(selectUser);

    return (
        <div className="question bg-light shadow">
            <div className="info">
            <Avatar src={user.photo} />
            <h5>{user.displayName}</h5>
            </div>
            <div className="ask">
            <h5>What is your question ?</h5>
            </div>
        </div>
    )
}

export default Feedquestion
