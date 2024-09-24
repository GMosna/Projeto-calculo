'use cliente';

import { useState } from "react";

export default function Likebutton () {
    const [likes, setLikes] = useState(0)

    function handleClick() {
        setLikes(Likes + 1);
    }

    return <button onClick={handleClick}>Like ({Likes})</button>;
}