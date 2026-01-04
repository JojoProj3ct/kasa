import { useState } from "react";
import "./Carousel.scss";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-image-container">
        <img
          src={images[current]}
          alt={`slide ${current}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-counter">
        {current + 1}/{length}
      </div>
    </div>
  );
}

export default Carousel;
