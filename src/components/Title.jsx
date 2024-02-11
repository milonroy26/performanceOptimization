import React from "react";

function Title() {
    console.log("rendering title...");

    return <h2 className="text-3xl mb-2">Performance Optimization</h2>;
}

export default React.memo(Title);
