import React from "react";

function Tag(props) {
    return (
        <li className="tag-container">
            <div className={props.cName + ' tag-wrapper'}>
                <div className="tag-text">
                    {props.text}
                </div>
            </div>
        </li>
    )
}

export default Tag