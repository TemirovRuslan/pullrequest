import React from 'react'


export default function Child({childToParent}) {
    return (
        <div>
            <button  onClick={() => childToParent()}>Click Child</button>
        </div>
    )
}