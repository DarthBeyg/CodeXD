"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [winningCells, setWinningCells] = useState<number[]>([]);

  const checkWinner = (board: string[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningCells(combo);
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index: number) => {
    if (winner || board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const winningPlayer = checkWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setWinningCells([]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-300 to-slate-300">
      <div className="grid grid-cols-3 gap-1 w-72 sm:w-80 md:w-96 lg:w-128 xl:w-144">
        {board.map((value, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border border-gray-400 text-2xl cursor-pointer bg-white transition-colors duration-500 w-full h-full`}
            style={{
              aspectRatio: '1/1',
              backgroundColor: winner && winningCells.includes(index) ? '#a7f3d0' : 'white',
              transition: 'background-color 0.5s ease',
            }}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div className="mt-4 text-2xl font-bold text-green-500">
          {`${winner} wins!`}
        </div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={handleReset}
      >
        Reset
      </button>

      {winner && (
        <div className="absolute top-0 left-0 right-0 pointer-events-none">
          <div className="flex justify-center p-4">
             <div className="text-5xl font-bold text-white animate-pulse">
                 🎉 Congratulations {winner}! 🎉
             </div>
          </div>
        </div>
)}
    </div>
  );
};

export default TicTacToe;