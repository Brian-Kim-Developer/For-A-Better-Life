import { useEffect } from "react";
import Slider from "react-slick";
import { QoD } from "../../state/actions";

import "./Slide.scss";

interface SlideProps {
  qodList: Array<QoD>
}

const Slide: React.FC<SlideProps> = (props) => {

  const { qodList } = props;

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
    <div className="slide">
      <Slider {...settings}>
        {qodList.map((qod) => {
            return (
              <div key={qod.id} className="item-container">
                <div className="item" style={{background: `url(${qod.background})`}}>

                </div>
              </div>
            )
        })}
      </Slider>
    </div>
  )
};

export default Slide;