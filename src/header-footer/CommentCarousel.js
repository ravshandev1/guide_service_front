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
