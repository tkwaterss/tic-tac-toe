import React from "react";
import './Reset.css'

const Reset = (props) => {

    return (
        <div>
            <button className="reset" onClick={props.handleReset}>RESET</button>
        </div>
    )
}

export default Reset;