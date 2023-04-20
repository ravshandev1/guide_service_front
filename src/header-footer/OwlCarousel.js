import React, {useState, useEffect} from "react";
import OwlCarousel from "react-owl-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "../header-footer/owl.css";
import MyNavbar from "./MyNavbar";
import img1 from '../img/img-1.jpg';
import img2 from '../img/img-2.jpg';
import img3 from '../img/img-3.jpg';
import img4 from '../img/img-4.jpg';
import img5 from '../img/img-5.jpg';
import img6 from '../img/img-6.jpg';
import img7 from '../img/img-7.jpeg';
import img8 from '../img/img-8.jpg';
import text from '../locals/text.json';
import {LANG} from "../locals";

function Owldemo1() {
    const [content, setContent] = useState({})
    useEffect(() => {
        if (localStorage.getItem(LANG) === 'english') {
            setContent(text.english)
        } else if (localStorage.getItem(LANG) === 'russian') {
            setContent(text.russian)
        }else {
            setContent(text.english)
        }
    }, [])

    return (
        <div>
            <MyNavbar/>
            <div className="container-fluid p-0 position-relative">
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
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome1}</p>
                        <img className="img " src={img1} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome2}</p>
                        <img className="img" src={img2} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome3}</p>
                        <img className="img" src={img3} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome1}</p>
                        <img className="img" src={img4} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome4}</p>
                        <img className="img" src={img5} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome4}</p>
                        <img className="img" src={img6} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome4}</p>
                        <img className="img" src={img7} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>
                    <div>
                        {/* <h1 className="owltext">UZBEKISTAN</h1> */}
                        <p className="visit">{content.welcome4}</p>
                        <img className="img" src={img8} alt=""/>
                        <button type="submit" className="callBtn"><a href={"/contact"}><p
                            className="callBtnText">{content.contact}</p></a></button>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
}

export default Owldemo1;
