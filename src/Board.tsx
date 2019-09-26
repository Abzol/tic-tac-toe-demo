import React, { useState } from "react";
import styled from "@emotion/styled";

const Square = styled.div({
  width: 80,
  height: 80,
  fontSize: 50,
  lineHeight: "80px",
  background: "#eee",
  border: "1px solid #111",
  color: "#111",
  cursor: "pointer"
});

const Container = styled.div({
  display: "flex",
  flexDirection: "column"
});

const Row = styled.div({
  display: "flex"
});

const Column = styled.div({
  display: "flex",
  flexDirection: "column"
});

const ResetButton = styled.button({
  marginTop: 32,
  height: 40
});

type TicTacTypes = "X" | "O" | "";
type Board = [TicTacTypes[], TicTacTypes[], TicTacTypes[]];

export const Board: React.FC = () => {
  const row = ["", "", ""];
  const initialState = [row, row, row] as Board;
  const [board, setBoard] = useState<Board>(initialState);
  const [turn, setTurn] = useState<TicTacTypes>("X");

  const handleClick = (row: number, col: number) => {
    if (board[row][col] === "") {
      const tempBoard = board;
      tempBoard[row][col] = turn;
      setTurn(turn === "O" ? "X" : "O");
      setBoard(tempBoard);
    }
  };

  return (
    <Container>
      <Column>
        {board.map((row, index) => (
          <Row key={index}>
            {row.map((marking, col) => (
              <Square
                key={`${index + col}`}
                onClick={() => handleClick(index, col)}
              >
                {marking}
              </Square>
            ))}
          </Row>
        ))}
      </Column>

      <ResetButton
        onClick={() => {
          setBoard(initialState);
          setTurn("X");
        }}
      >
        Reset
      </ResetButton>
    </Container>
  );
};
