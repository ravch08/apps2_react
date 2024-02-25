import { useEffect, useState } from "react";
import BackHome from "../../features/BackHome";
import SingleCell from "./SingleCell";

const TicTacToe = () => {
  const [status, setStatus] = useState("");
  const [isNextTurnX, setIsNextTurnX] = useState(true);
  const [values, setValues] = useState<string[]>(Array(9).fill(""));

  function handleReset() {
    setValues(Array(9).fill(""));
  }

  function findWinner(values: string[]) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (values[x] && values[x] === values[y] && values[x] === values[z]) {
        return values[x];
      }
    }

    return null;
  }

  function handleClick(id: number) {
    const copyValues = [...values];

    if (copyValues[id] || findWinner(values)) return;
    copyValues[id] = isNextTurnX ? "X" : "O";

    setIsNextTurnX(!isNextTurnX);
    setValues(copyValues);
  }

  useEffect(() => {
    if (!findWinner(values) && values.every((item) => item !== "")) {
      setStatus(`Its a DRAW. Please Restart the Game!`);
    } else if (findWinner(values)) {
      setStatus(`The Winner is ${findWinner(values)}.`);
    } else {
      setStatus(`Next player is ${isNextTurnX ? "X" : "O"}`);
    }
  }, [values, isNextTurnX]);

  return (
    <>
      <BackHome />
      <section aria-labelledby="Tic Tac Toe" className="mt-24">
        <div className="container ">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <SingleCell
                value={values[0]}
                handleClick={() => handleClick(0)}
              />
              <SingleCell
                value={values[1]}
                handleClick={() => handleClick(1)}
              />
              <SingleCell
                value={values[2]}
                handleClick={() => handleClick(2)}
              />
            </div>
            <div className="flex items-center gap-1">
              <SingleCell
                value={values[3]}
                handleClick={() => handleClick(3)}
              />
              <SingleCell
                value={values[4]}
                handleClick={() => handleClick(4)}
              />
              <SingleCell
                value={values[5]}
                handleClick={() => handleClick(5)}
              />
            </div>
            <div className="flex items-center gap-1">
              <SingleCell
                value={values[6]}
                handleClick={() => handleClick(6)}
              />
              <SingleCell
                value={values[7]}
                handleClick={() => handleClick(7)}
              />
              <SingleCell
                value={values[8]}
                handleClick={() => handleClick(8)}
              />
            </div>

            <p className="my-20 text-xl font-bold">{status}</p>
            <button onClick={handleReset} className="btn-link inline-block">
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicTacToe;
