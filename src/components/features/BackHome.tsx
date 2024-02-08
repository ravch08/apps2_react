import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <Link to="/" className="absolute top-8 left-8 btn-back">
      Back to Home
    </Link>
  );
};

export default BackHome;
