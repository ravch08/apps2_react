import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Accordion,
  Carousel,
  Home,
  LoadMoreData,
  NavTabs,
  QRCodeGenerator,
  RandomHexColor,
  RecursiveMenu,
  ScrollIndicator,
  SearchAutocomplete,
  StarRating,
  TicTacToe,
} from "./utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carousel" element={<Carousel />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="hex" element={<RandomHexColor />} />
        <Route path="scroll-indicator" element={<ScrollIndicator />} />
        <Route path="load-more" element={<LoadMoreData />} />
        <Route path="navtabs" element={<NavTabs />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="search-autocomplete" element={<SearchAutocomplete />} />
        <Route path="qr-code" element={<QRCodeGenerator />} />
        <Route path="recursive" element={<RecursiveMenu />} />
        <Route path="rating" element={<StarRating stars={5} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
