import React from "react";

function DisplayNames(props){
  
const namesList = props.names.map(name => <li>{name}</li>)

    return(
        <div>
            <h2>Display names</h2>
            <ul>
                {namesList}
            </ul>
        </div>
    )
}

export default DisplayNames;