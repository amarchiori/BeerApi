import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflow:'scroll', border: '5px solid gold', height: '900 px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;