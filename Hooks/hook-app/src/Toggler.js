import React from "react";
import useToggle from "./hooks/useToggle";
function Toggler() {


    const [isHappy, toggleHappy] = useToggle(true);
    const [isBroken, toggleBroken] = useToggle(false);




    return (<div>
        <h2 onClick={toggleHappy}>{isHappy ? "😄" : "😢"}</h2>
        <h2 onClick={toggleBroken}>{isBroken ? "❤️" : "💔"}</h2>

    </div>);
}

export default Toggler;