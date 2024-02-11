/* eslint-disable react/prop-types */
import React from "react";

function ShowCount({ count, title }) {
    console.log(`rendering ${title}....`);

    return (
        <p>
            {title} is {count}
        </p>
    );
}

export default React.memo(ShowCount);

// 📌  React.memo : যখন কম্পোনেন্ট ke react memory te seve kre rake jate componet render hleo ai compnet Rerender hbe na, jodi kno reactive value karone change hoi ta hle render hbe.
