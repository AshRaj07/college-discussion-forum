import React from 'react'
import Feed from '../Feed/Feed'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../Widget/Widget'
import "./Homepage.css"

const Homepage = () => {
    return (
        <div className="home_content">
            <Sidebar />
            <Feed />
            <Widget />
        </div>
    )
}

export default Homepage
