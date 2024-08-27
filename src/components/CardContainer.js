import React, { useState } from "react";
import Card from './Card'

function CardContainer({data}) {

    const [text, setText] = useState('')

    // const text = ''

    console.log(text);

    return (
        <div>
            <input value={text} onChange={(e)=> setText(e.target.value)}/>
            <button onClick={() => setText('')}>Search</button>
            <Card name={data.name} age={data.age}/>
        </div>
    )
}

export default CardContainer