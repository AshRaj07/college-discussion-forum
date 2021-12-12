import React from 'react'
import "./Widget.css"
import WidgetOption from './WidgetOption'
const Widget = () => {
    return (
        <div className="widget bg-light">
            <div className="widget_header">
                <h5>Spaces Follow</h5>
            </div>
            <WidgetOption />
        </div>
    )
}

export default Widget
