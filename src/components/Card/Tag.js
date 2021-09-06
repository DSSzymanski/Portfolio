import React from "react";

function Tag(props) {
    return (
        <div className="tag-container">
            <div className={props.cName + ' tag-wrapper'}>
                <div className="tag-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Tag