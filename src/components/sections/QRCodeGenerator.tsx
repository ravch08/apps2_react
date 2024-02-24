import { useState } from "react";
import QRCode from "react-qr-code";
import BackHome from "../features/BackHome";

const QRCodeGenerator = () => {
  const [inputVal, setInputVal] = useState("");
  const [qrCode, setQRCode] = useState("");

  function generateQRCode(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setQRCode(inputVal);
    setInputVal("");
  }

  return (
    <>
      <BackHome />
      <section aria-labelledby="QR Code Generator" className="mt-24">
        <div className="container flex flex-col items-center">
          <form className="mb-24 flex items-center gap-4">
            <input
              autoFocus
              type="text"
              value={inputVal}
              className="form-input"
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="btn-link" onClick={generateQRCode}>
              Generate QR Code
            </button>
          </form>

          <QRCode size={400} value={qrCode} />
        </div>
      </section>
    </>
  );
};

export default QRCodeGenerator;
