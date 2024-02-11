/* eslint-disable react/prop-types */
import React from "react";

function Button({ handleClick, children }) {
    console.log(`rendering button ${children}`);

    return (
        <p>
            <button className="bg-purple-500 px-2 py-1 rounded-md" type="button" onClick={handleClick}>
                {children}
            </button>
        </p >
    );
}

export default React.memo(Button);
