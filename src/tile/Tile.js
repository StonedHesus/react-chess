import React from "react";
import "./tile.css";

export class Tile extends React.Component{

    constructor(props, colour) {
        super(props);

        this.state = {
            colour : colour,
        }
    }

    render(){

        return(
            <div className={this.props.colour.toString().concat("-tile")}>
                <button className={"button"}>

                </button>
            </div>
        );
    }
}