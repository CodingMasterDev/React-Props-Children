import React from "react";
const Child = (props) => {
    const { a, b, c } = props;
    const d = props.d;
    return (
        <div>
            <p>a:{a}</p>
            <p>b:{b}</p>
            <p>c:{c}</p>
            <p>d:{d}</p>
            {props.children}
        </div>
    );
}
export default Child;
