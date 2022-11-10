import React from "react";
import {Tile} from "../tile/Tile";
import "./chessboard.css";

class Chessboard extends React.Component{

    constructor(props, width, height) {
        super(props);
        this.state = {
            width: width,
            height: height
        }
    }

    render(){

        const board = Array(8);

        let order = false;

        for (let i = 0; i < 8; ++i) {

            if(order === false)
                board.push(
                    <div className={"row"}>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                    </div>
                       );
            else
                board.push(
                    <div className={"row"}>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                        <Tile colour={"white"}/>
                        <Tile colour={"black"}/>
                    </div>
                );

            order = !order;
        }

        return (
            <React.Fragment>
                {board}
            </React.Fragment>
        );
    }
}

export default Chessboard;