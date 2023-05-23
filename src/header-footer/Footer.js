import React, {useState, useEffect} from "react";
import "../header-footer/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import callicon from "../img/callicon.png";
import img1 from "../assets/rasm.png";
import img2 from "../assets/rasm2.png";
import img3 from "../assets/rasm3.png";
import img4 from "../assets/rasm4.png";
import img6 from "../assets/rasm6.png";
import email from "../img/emailicon.png";
import facebook from "../assets/Facebook_icon.png";
import telegram from "../assets/telegram-icon.png";
import instagram from "../assets/Instagram-Image.png";
import axios from "axios";
import {API} from '../pages/api';
import {LANG, getLang} from "../locals";
import text from "../locals/text.json";

function Footer() {
    const [about, setAbout] = useState('')
    const [content, setContent] = useState({})
    useEffect(() => {
        // invalid url will trigger an 404 error
        axios.get(`${API}${getLang()}/api/v1/contact/about/`).then((res) => {
            setAbout(res.data);
        }).catch(error => {
            console.log(error);
        });
        if (localStorage.getItem(LANG) === 'english') {
            setContent(text.english)
        } else if (localStorage.getItem(LANG) === 'russian') {
            setContent(text.russian)
        }else {setContent(text.english)}
    }, []);
    return (
        <div className="container-fluid back bg-gradient">
            <div className="container">
                <div className="row text-white">
                    <div className="col-xl-3">
                        <h3 className="footer-title">{content.about}</h3>
                        {about && about.map((item, index) =>
                            <div key={index}>
                                <p>{item.address}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-xl-3 mb-3 contact-footer">
                        <h3 className="footer-title">{content.contact}</h3>
                        <span className="d-flex align-items-center">
                <img className="facebook" src={facebook} alt=""/>
                <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100091562413167">
                  Facebook
                </a>
              </span>
                        <span className="d-flex align-items-center mt-1">
                <img className="instagram" src={instagram} alt=""/>
                <a className="text-decoration-none" href="https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM=">
                  Instagram
                </a>
              </span>
                        <span className="d-flex align-items-center mt-1">
                <img className="telegram" src={telegram} alt=""/>
                <a className="text-decoration-none" href="https://t.me/+998500019944">
                  Telegram
                </a>
              </span>
                        <span className="d-flex align-items-center mt-1">
                <img className="call" src={callicon} alt=""/>
                <a className="text-decoration-none" href="tel:+998 05 001 99 44">
                +998 50 001 99 44
                </a>
              </span>
                        <span className="d-flex align-items-center mt-1">
                <img className="email" src={email} alt=""/>
                <a className="text-decoration-none" href="https://guide.service.uz@gmail.com">
                  uz@gmail.com
                </a>
              </span>
                    </div>
                    <div className="col-xl-3">
                        <h3 className="footer-title">Instagram</h3>
                        <div>
                            <img className="uzimg" src={img1} alt=""/>
                            <img className="uzimg mx-3" src={img2} alt=""/>
                            <img className="uzimg" src={img3} alt=""/>
                        </div>
                        <div className="mt-3">
                            <img className="uzimg" src={img4} alt=""/>
                            <img className="uzimg mx-3" src={img1} alt=""/>
                            <img className="uzimg" src={img6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
