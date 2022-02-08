import { useEffect } from "react";
import Slider from "react-slick";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { QoD } from "../../state/actions";

import "./QoDCarousel.scss";

interface QoDCarouselProps {
  qodList: Array<QoD>
}

const QoDCarousel: React.FC<QoDCarouselProps> = (props) => {

  const { qodList } = props;
  const theme = useTypedSelector((state) => state.theme);

  useEffect(() => {
    console.log(qodList);
  }, [qodList])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true
  };

  return (
    <div className={`carousel ${theme}`}>
      <Slider {...settings}>
        {qodList.map((qod) => {
            return (
              <div key={qod.id} className="item-container">
                <div className="thumbex">
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
  )
};

export default QoDCarousel;