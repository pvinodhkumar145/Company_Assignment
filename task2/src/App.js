import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function App() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  const renderSquare = (i) => (
    <Button
      variant="contained"
      color="primary"
      className="square"
      onClick={() => handleClick(i)}
    >
      {squares[i]}
    </Button>
  );

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = 'It\'s a draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Box className="App">
      <Typography variant="h4" gutterBottom>
        Tic Tac Toe
      </Typography>
      <Box className="board">
        <Box className="status">{status}</Box>
        <Grid container spacing={1}>
          {[0, 1, 2].map((row) => (
            <Grid container item key={row} justifyContent="center">
              {[0, 1, 2].map((col) => (
                <Grid item key={col}>
                  {renderSquare(row * 3 + col)}
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRestart}
            className="restart-button"
          >
            Restart
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

function calculateWinner(squares) {
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
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
