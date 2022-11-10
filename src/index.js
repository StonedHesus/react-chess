import React from "react";
import ReactDOM from 'react-dom/client';
import Chessboard from "./chessboard/Chessboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Chessboard width={8} height={8}/>);