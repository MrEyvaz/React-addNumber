import React from "react";
import Card from './Card'

function CardContainer({data}) {
    return (
        <div>
            <Card name={data.name} age={data.age}/>
        </div>
    )
}

export default CardContainer