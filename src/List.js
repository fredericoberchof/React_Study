import React from "react"

function List(props) {

    function deleteItem(item) {
        
    }
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                {item.text}
                <button onClick={() =>{deleteItem(item)}} ><img src="./assets/trasha.svg"></img> </button>
            </li>)}
        </ul>
    )
}

export default List
