import { useState } from "react";
import { BackHome } from "../../utils/helper";

const digits = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const RandomHexColor = () => {
  const [hexcode, setHexcode] = useState<string>("1da1f2");

  const hexArr: string[] = [];

  const generateHex = () => {
    for (let i = 0; i < 6; i++) {
      const randomEl = Math.floor(Math.random() * digits.length);
      hexArr.push(digits[randomEl]);
    }

    const hexStr = hexArr.join("");
    setHexcode(hexStr);

    hexArr.length = 0;
  };

  return (
    <>
      <BackHome />
      <section aria-labelledby="Random Hex Color Generator">
        <div className="container">
          <div className="mb-20 text-center">
            <h1 className="mb-8 text-5xl">Random HEX Generator</h1>
            <button onClick={generateHex} className="btn-link">
              Generate HEX
            </button>
          </div>

          <div
            style={{ backgroundColor: `#${hexcode}` }}
            className="flex h-[500px] w-full items-center justify-center border"
          >
            <h2 className="text-7xl font-bold">#{hexcode}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default RandomHexColor;
