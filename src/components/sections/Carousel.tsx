import { useState } from "react";
import { BackHome } from "../../utils/helper";

const carouselArray = [
  {
    id: 1,
    description: "Random Image 1",
    imgSrc:
      "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    description: "Random Image 2",
    imgSrc:
      "https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    description: "Random Image 3",
    imgSrc:
      "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevImageHandler = () => {
    if (index <= 0) setIndex(carouselArray.length - 1);
    else {
      setIndex((prev) => prev - 1);
    }
  };

  const nextImageHandler = () => {
    if (index >= carouselArray.length - 1) setIndex(0);
    else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <BackHome />
      <section className="flex flex-col items-center justify-center">
        <div className="container text-center">
          <figure className="mb-2 h-[600px] overflow-hidden">
            <img
              className="w-full"
              src={carouselArray[index].imgSrc}
              alt={carouselArray[index].description}
            />
          </figure>
          <p>{carouselArray[index].description}</p>

          <div className="mt-12 flex items-center justify-center gap-2">
            <button onClick={prevImageHandler} className="btn-primary">
              Prev
            </button>
            <button onClick={nextImageHandler} className="btn-primary">
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
