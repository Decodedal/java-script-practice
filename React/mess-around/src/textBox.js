import { render } from "@testing-library/react";
import React from "react";

class ControlledInput extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            
            input: ''

        };

    this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){

        this.setState({

            input : event.target.value

        });

    }

        render(){

            return(

                <div>

                    <input value={this.state.input} onChange={this.handleChange}/>

                    <h4>Controlled input</h4>

                    <p>{this.state.input}</p>
                </div>
            );
    }
}

export default ControlledInput;