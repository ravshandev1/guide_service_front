// import React, { Component } from "react";
// import Slider from "react-slick";
// import registon from '../img/registon.png';

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div className="container-fluid">
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <img style={{width:800, heigth:650}} src={registon} alt=""/>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import header from "../assets/header.jpg";
import registon from "../assets/registon.png";
import registon1 from "../assets/registonfoto.png";
import registon2 from "../assets/registonPhoto.png";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    700: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
};
class Slider extends Component {
  render() {
    return (
      <div>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div class="item">
            <img className="img" src={header} alt="" />
          </div>
          <div class="item">
            <img className="img" src={registon} alt="" />
          </div>
          <div class="item">
            <img className="img" src={registon1} alt="" />
          </div>
          <div class="item">
            <img className="img" src={registon2} alt="" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default Slider;
