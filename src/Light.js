import React from "react";

const Light = ({ color, lit, setLit }) => {
    return (

        <div>
            <div className="Ligth"
                style={{ backgroundColor: color === lit ? color : "grey" }}
                onClick={() => setLit(color)}
            ></div>
        </div>
    );
};

export default Light;