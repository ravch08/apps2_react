import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="p-20">
      <h1 className="mb-20 text-center text-4xl font-bold">React Apps</h1>
      <div className="flex flex-wrap items-center gap-6">
        <Link to="carousel" className="btn-link">
          Carousel
        </Link>
        <Link to="accordion" className="btn-link">
          Accordion
        </Link>
        <Link to="hex" className="btn-link">
          Random Hex Color
        </Link>
      </div>
    </main>
  );
};

export default Home;
