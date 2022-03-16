import React from 'react'
import { useParams } from "react-router"

const Word = () => {

    const {input, textcolor, bgcolor} = useParams();

    const style = {
        color: textcolor ,
        backgroundColor: bgcolor 
    }
    
    return (
        <div>
            <h1 style={style}>
                {isNaN(input) ? 
                `THE WORD IS: ${input}` : `THE NUMBER IS: ${input}`}
            </h1>
        </div>
    )
}

export default Word