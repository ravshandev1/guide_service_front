import React, {useEffect, useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../components/OwlCarouselRegion.css";
import {LANG} from "../locals";
import text from "../locals/text.json";

function Carousel(props) {
    const [content, setContent] = useState({})
    const {image} = props
    useEffect(() => {
        if (localStorage.getItem(LANG) === 'english') {
            setContent(text.english)
        } else if (localStorage.getItem(LANG) === 'russian') {
            setContent(text.russian)
        } else {
            setContent(text.english)
        }
    }, []);

    return (
        <div>
            <div className="container mb-4 p-0">
                <h1 className="text-center my-4">{content.places}</h1>
                <OwlCarousel keyParams="option"
                             itemScope={true}
                             items={3}
                             className="owl-theme"
                             loop={true}
                             nav={false}
                             dots={false}
                             autoplay={true}
                             autoplaySpeed={60}
                             margin={10}
                             options={2}
                >
                    {image && image.map((item, index) =>
                        <div key={index}>
                            <img className="images" src={item.get_image} alt="as"/>
                        </div>
                    )}
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Carousel;
