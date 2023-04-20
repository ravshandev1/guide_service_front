import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../components/OwlCarouselRegion.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../components/GuidCarousel.css";
import {API} from '../pages/api'
const Owldemo3 = (props) => {
    const [cityone, setcityone] = useState();
    const {id} = useParams();

    useEffect(() => {
        Axios.get(`${API}api/v1/guid/${id}/`)
            .then((response) => {
                setcityone(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <div className="container my-4 p-0">
                <div className="">
                    <OwlCarousel
                        className="owl-theme mt-5"
                        keyParams="option"
                        itemScope={true}
                        items={1}
                        loop={true}
                        nav={false}
                        dots={false}
                        autoplay={true}
                        autoplaySpeed={60}
                        margin={10}
                    >
                        {cityone &&
                            cityone?.works?.map((item, index) => {
                                return (
                                        <div className="item image-w">
                                            <img
                                                className="carousel-img"
                                                key={index}
                                                src={item?.get_image}
                                                alt=""
                                            />
                                        </div>
                                );
                            })}
                    </OwlCarousel>
                </div>
                <div>
                    <OwlCarousel
                        className="owl-theme mt-5"
                        keyParams="option"
                        itemScope={true}
                        items={1}
                        loop={true}
                        nav={false}
                        dots={false}
                        autoplay={false}
                        autoplaySpeed={60}
                        margin={10}
                    >
                        {cityone &&
                            cityone?.works?.map((item, index) => {
                                return (
                                    <>
                                        <div className="item video-w" key={index}>
                                            <video className="works-video" height="240" controls>
                                                <source src={item?.get_video} type=""/>
                                            </video>
                                        </div>
                                    </>
                                );
                            })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Owldemo3;