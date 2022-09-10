import React, {useState} from "react";

function AddName(props){
 
    const [input, setInput] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.nameAdd(input)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type= "text" onChange={(e)=> setInput(e.target.value)}/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )

}

export default AddName;