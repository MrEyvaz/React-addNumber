import React, { useState } from "react";

function Card({name, age}) {

    const [num, setNum] = useState(0)

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Bu adamin adi {age} yasi var.</p>
                <button className="btn btn-primary" onClick={()=> setNum(num+1)}>Add</button>
                {num}
                <button className="btn btn-primary" onClick={()=> setNum(num-1)}>Minus</button>
            </div>
        </div>
    )
}

export default Card