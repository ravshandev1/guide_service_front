import React from 'react';
import '../header-footer/CommentCarousel.css'
import OwlCarousel from "react-owl-carousel";
import img1 from '../img/avatar-icon.png'

function CommentCarousel(props) {
    const {comments} = props
    return (
        <div>
            <div className="container my-4">
                <OwlCarousel
                    items={1}
                    className="owl-theme"
                    loop={true}
                    nav={false}
                    dots={false}
                    autoplay={true}
                    autoplaySpeed={60}
                    margin={8}
                >
                    {comments && comments.map((item, index) => {
                        return (
                            <div key={index} className={"pe-3 left-padding"}>
                                <div className={"img-text"}>
                                    <img className="userimg" src={img1} alt=""/>
                                    <h2 className="userName ms-3 mt-2">{item.client}</h2>
                                </div>
                                <div className="usercomment">
                                    <p className={"commenttext"}>{item.comment}</p>
                                </div>
                            </div>
                        );
                    })}
                </OwlCarousel>
            </div>
        </div>
    );
}

export default CommentCarousel;

// import React, {useEffect, useRef} from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel';
//
// import img1 from '../img/lang_3.png'
//
// const OwlCarousel = ({children}) => {
//     const carouselRef = useRef(null);
//
//     useEffect(() => {
//         $(carouselRef.current).owlCarousel({
//             loop: true,
//             margin: 10,
//             nav: true,
//             responsive: {
//                 0: {
//                     items: 1,
//                 },
//                 600: {
//                     items: 3,
//                 },
//                 1000: {
//                     items: 5,
//                 },
//             },
//         });
//     }, []);
//
//     return (
//         <div className="owl-carousel owl-theme" ref={carouselRef}>
//             <div className={"pe-3 ps-5"}>
//                 <div className={"img-text"}>
//                     <img className="userimg" src={img1} alt=""/>
//                     <h2 className="userName ms-3 mt-2">Lorem ipsum.</h2>
//                 </div>
//                 <div className="usercomment">
//                     <p className={"commenttext"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                         Blanditiis dolores error ex illo iure optio praesentium quo rem vero voluptate?</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default OwlCarousel;

