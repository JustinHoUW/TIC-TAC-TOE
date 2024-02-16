import React, { useState } from 'react';
import './Board.css';
import Square from './Square.js';

function Board() {
    let status;
    let result;
    const [squares, setSquares] = useState(Array.from({ length: 9 }, () => null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        // Verify if the square has been marked
        if (squares[i]) {
            return; // Do nothing, return empty
        }
        // Copy current squares array into nextSquares
        const nextSquares = squares.slice();
        // Assign 'X' or 'O' based on the player's turn
        nextSquares[i] = xIsNext ? 'X' : 'O'; // shorthand notation for if... else
        // Updates the squares with the new value
        setSquares(nextSquares);
        // Switch the turn to the next player
        setXIsNext(!xIsNext);
    }
    return (
        <>
            {/* Content Section */}
            <div className="container gameContainer">
                <div className = "card mb-3">
                    <h3 className = "card-hearder">Play Tic-Tac-Toe</h3>
                    <div className = "card-body">
                        <h5 className = "card-title">This game supports two players</h5>
                        <h6 className = "card-subtitle text-muted">To start, click on the squares.</h6>
                    </div>
                <div className = "card-body">
                    <div className="board-row">
                        <Square value = {squares[0]} onSquareClick = {() => handleClick(0)} />
                        <Square value = {squares[1]} onSquareClick = {() => handleClick(1)} />
                        <Square value = {squares[2]} onSquareClick = {() => handleClick(2)} />
                    </div>
                <div className="board-row">
                        <Square value = {squares[3]} onSquareClick = {() => handleClick(3)} />
                        <Square value = {squares[4]} onSquareClick = {() => handleClick(4)} />
                        <Square value = {squares[5]} onSquareClick = {() => handleClick(5)} />
                </div>
                <div className= "board-row">
                        <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
                        <Square value = {squares[7]} onSquareClick = {() => handleClick(7)} />
                        <Square value = {squares[8]} onSquareClick = {() => handleClick(8)} />
                </div>
                </div>
                <div className = "card-footer text-muted">
                    <p>{status}
                        &nbsp;
                        &nbsp;
                        {result}
                    </p>
                </div>
                </div>
                </div>
        </>
    )
}
export default Board;