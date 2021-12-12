import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOptions.css"

const SidebarOptions = () => {
  return (
    <div className="d-flex flex-column">
      <div className="sidebarOptions">
        <img
          className="align-self-center mr-3"
          src="data:image/jpeg;base64,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"
          alt="Generic placeholder"
        />
          <h5>Machine Learning</h5>
    
      </div>
      <div className="sidebarOptions">
        <img
          src="https://www.analyticssteps.com/backend/media/thumbnail/8236290/7947106_1583568346_3210209_1568969848_Banner_Deep_learning.jpg"
          alt="Generic placeholder"
        />
          <h5>Deep Learning</h5>
    
      </div>
      <div className="sidebarOptions">
        <img
          src="https://www.analyticsinsight.net/wp-content/uploads/2018/05/AI-ML-DL.jpg"   alt="ok"   />
          <h5>Artificial Inteligence</h5>
    
      </div>
      <div className="sidebarOptions">
        <img
          className="align-self-center mr-3"
          src="https://miro.medium.com/max/1200/1*0IUlN_n6ML5q3YzjGz6tAA.jpeg"
          alt="Generic placeholder"
        />
          <h5>Data Mining</h5>
    
      </div>
      <div className="sidebarOptions">
        <Add fontSize="large" />
          <h5>Discover More</h5>
    
      </div>
    </div>
  );
};

export default SidebarOptions;
