import React from 'react'

export default function Gate( props)  {
    return (
        <div>
            {props.isOpen === "true" ? "It's true" : "false"}
        </div>
    )
}


