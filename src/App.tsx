import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accordion,
  Carousel,
  Home,
  LoadMoreData,
  RandomHexColor,
  StarRating,
} from "./utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="hex" element={<RandomHexColor />} />
        <Route path="load-more" element={<LoadMoreData />} />
        <Route path="rating" element={<StarRating stars={5} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
