import React from "react";

const Square = (props) => {
    const {data} = props
    return(
        <div className="square">
            {data}
        </div>
    )
}

export default Square;