import { useEffect } from "react";
import Slider from "react-slick";

import "./Slide.scss";

interface SlideProps {
  categories: Array<string>
}

const Slide: React.FC<SlideProps> = (props) => {

  const { categories } = props;
  
  useEffect(() => {
    console.log(categories);
  }, [categories])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    dots: true
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        <div className="item">
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>2</h3>
        </div>
        <div className="item">
          <h3>3</h3>
        </div>
        <div className="item">
          <h3>4</h3>
        </div>
        <div className="item">
          <h3>5</h3>
        </div>
        <div className="item">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
};

export default Slide;