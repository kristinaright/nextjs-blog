import Board from '../board/board'
import React, { useState } from 'react';

export default function Game() {
    const handleClick = (i) => {
        const updatedHistory = history.slice(0, stepNumber + 1);
        const updatedCurrent = updatedHistory[updatedHistory.length - 1];
        const updatedSquares = updatedCurrent.squares.slice();
        if (calculateWinner(updatedSquares) || updatedSquares[i]) {
            return;
        }
        updatedSquares[i] = xIsNext ? 'X' : 'O';
        setHistory(updatedHistory.concat([{
            squares: updatedSquares,
        }]));
        setXIsNext(!xIsNext);
        setStepNumber(stepNumber + 1);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    // Объявляем новую переменную состояния используя хук useState,
    // возвращвет два значения, текущее значение состояния и функцию для его обновления
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Перейти к ходу #' + move :
            'К началу игры';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Выиграл ' + winner;
    } else {
        status = 'Следующий ход: ' + (xIsNext ? 'X' : 'O');
    }


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}