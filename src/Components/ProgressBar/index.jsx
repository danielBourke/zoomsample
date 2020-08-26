import React from "react"
import "./progrssBar.css"

const ProgressBar = ({color, width}) => {

    console.log(`The width is ${width}`)
    return(
        <div className="progress">
  <div className="progress-bar orange" style={{width:`${width}%`}}></div>

</div>
    )
}


export default ProgressBar