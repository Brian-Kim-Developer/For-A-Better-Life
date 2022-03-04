import React from "react";
import Slider from "react-slick";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { QoD } from "../../state/actions";

import "./QoDCarousel.scss";

interface QoDCarouselProps {
  qodList: Array<QoD>
}

const QoDCarousel: React.FC<QoDCarouselProps> = (props) => {

  const { qodList } = props;
  const theme = useTypedSelector((state) => state.theme);
  const { setQoD } = useActions();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: window.innerWidth > 576 ? 3 : 1,
    speed: 500,
    dots: true
  };

  return (
    <React.Fragment>
      <h5 className={`carousel-header ${theme}`}>More quotes of today</h5>
      <div className={`carousel ${theme}`}>
        <Slider {...settings}>
          {qodList.map((qod) => {
              return (
                <div key={qod.id} className="item-container">
                  <div className="thumbex" onClick={() => setQoD(qod)}>
                    <div className="thumbnail">
                      <img src={`${qod.background}`} alt={qod.category}/>
                      <span>{qod.category.charAt(0).toUpperCase() + qod.category.slice(1)}</span>
                    </div>
                  </div>
                </div>
              )
          })}
        </Slider>
      </div>
    </React.Fragment>
  )
};

export default QoDCarousel;