import React from 'react'
import "./WidgetOption.css"

const WidgetOption = () => {
    return (
        <div className="widgetOption">
            <div className="widget_content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJpohJH3cVrGB6SRbNfmt8jJpPR_OsqCV2w&usqp=CAU"  alt="agent" />
                <div className="widget_contentTitle">
                <h5>Web Devlopment</h5>
                <p>The best mobile app devlopment</p>
            </div>
            </div>
           
            <div className="widget_content">
                <img src="https://thumbs.dreamstime.com/b/machine-learning-icon-two-color-design-red-black-style-elements-icons-collection-creative-web-apps-software-print-144659464.jpg"  alt="agent" />
                <div className="widget_contentTitle">
                <h5>Machine Learning</h5>
                <p>The best machine learning models</p>
            </div>
            </div>

            <div className="widget_content">
                <img src="https://cdn-icons-png.flaticon.com/512/2103/2103832.png"  alt="agent" />
                <div className="widget_contentTitle">
                <h5>Deep Learning</h5>
                <p>The best deep learning models</p>
            </div>
            </div>

        </div>
    )
}

export default WidgetOption
