import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Accordion, Carousel, Home, RandomHexColor } from "./utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="hex" element={<RandomHexColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
