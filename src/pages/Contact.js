import React from "react";
import ContactNav from "../header-footer/ContactNav";
import "../pages/contact.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {format} from "date-fns";
import Owldemo2 from "../components/OwlCarouselRegion";
import {API} from '../pages/api';
import {LANG} from "../locals";
import text from "../locals/text.json";
import facebook from "../img/facebookicon.png";
import instagram from "../img/instagram-icon.jpg";
import email from "../img/email-icons.jpg";
import callicon from "../img/phone-icon.png";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [city, setCity] = useState([]);
    const [language, setLanguage] = useState([]);
    const [content, setContent] = useState({});

    function refResh() {
        window.location.reload(false);
    }

    useEffect(() => {
        axios.get(`${API}api/v1/guid/city/`)
            .then((response) => {
                setCity(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get(`${API}api/v1/guid/language/`)
            .then((res) => {
                setLanguage(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
        if (localStorage.getItem(LANG) === 'english') {
            setContent(text.english)
        } else if (localStorage.getItem(LANG) === 'russian') {
            setContent(text.russian)
        } else {
            setContent(text.english)
        }
    }, []);

    const [data, setdata] = useState({
        name: "",
        check_in_time: "",
        check_out_time: "",
        email: "",
        contact_link: "",
        contact_type: "",
        city: "",
        language: "",
        phone: ""
    });

    function handle(e) {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setdata(newdata);
        console.log(newdata);
    }

    // const notify = () => {
    //     toast.success('Message sent successfully!');
    // };
    const contact = (e) => {
        e.preventDefault();
        axios.post(`${API}api/v1/contact/`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            contact_link: `${data.contact_type}${data.contact_link}`,
            city: parseInt(data.city),
            check_in_time: data.check_in_time,
            check_out_time: data.check_out_time,
            language: parseInt(data.language)
        })
        alert('Message sent successfully!')
        // toast.success('Message sent successfully!')
    };

    return (
        <div className="row m-0 text-center">
            <ContactNav/>
            <h1 className="text-center mt-5 mb-3 contact-text">{content.contact}</h1>
            <div className="flexicons text-center">
                <div className="col-xl-3 icon-text mt-4">
                    <a href={"tel:+998500019944"}>
                        <img className="call-icon change-width" src={callicon} alt=""/>
                        <h4 className="text-dark icons-text">+998500019944</h4>
                    </a>
                </div>
                <div className="col-xl-3 icon-text mt-4 me-2">
                    <a href={"https://www.facebook.com/profile.php?id=100091562413167"}>
                        <img className="facebook-icon" src={facebook} alt=""/>
                        <h4 className="text-dark icons-text">Facebook</h4>
                    </a>
                </div>
                <div className="col-xl-3 icon-text mt-4">
                    <a
                        href={"https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM="}
                    >
                        <img className="instagram-icon" src={instagram} alt=""/>
                        <h4 className="text-dark icons-text">Instagram</h4>
                    </a>
                </div>

                <div className="col-xl-3 icon-text mt-4">
                    <a href="https://guide.service.uz@gmail.com">
                        <img className="email-icon" src={email} alt=""/>
                        <h4 className="text-dark icons-text">uz@gmail.com</h4>
                    </a>
                </div>

            </div>

            <form className="my-5 px-5" onSubmit={(e) => contact(e)}>
                <div className="d-flex justify-space-between">
                    <input
                        onChange={(e) => handle(e)}
                        id="name"
                        value={data.name}
                        type={"text"}
                        name="name"
                        placeholder="First name"
                        className="form-control me-2 border-dark"
                    />
                    <input
                        onChange={(e) => handle(e)}
                        id="phone"
                        value={data.phone}
                        type={"text"}
                        name="phone"
                        placeholder="Phone number optional"
                        className="form-control ms-2 border-dark"
                    />
                </div>
                <div className="d-flex mt-4">
                    <label name={"date"} className={"dates"}>From
                        <input
                            onChange={(e) => handle(e)}
                            id="check_in_time"
                            value={data.check_in_time}
                            type={"datetime-local"}
                            name="date"
                            format={format}
                            placeholder="from"
                            className="form-control me-2 border-dark"
                        />
                    </label>
                    <label name={"date"} className={"dates"}>Till
                        <input
                            onChange={(e) => handle(e)}
                            id="check_out_time"
                            value={data.check_out_time}
                            type={"datetime-local"}
                            name="date"
                            format={format}
                            placeholder="till"
                            className="form-control ms-2 border-dark"
                        />
                    </label>
                </div>

                <div className="d-flex justify-space-between mt-4 ">
                    <input
                        onChange={(e) => handle(e)}
                        id="email"
                        value={data.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control border-dark"
                    />
                </div>
                <div className="d-flex mt-4">
                    <select
                        onChange={(e) => handle(e)}
                        className="select-btn form-control border-dark me-2"
                        name="contact_type"
                        id="contact_type"
                        required
                    >
                        <option value={'https://web.whatsapp.com/'}>Whatsapp</option>
                        <option value={'https://www.facebook.com/'}>Facebook</option>
                        <option value={'https://twitter.com/'}>Twitter</option>
                        <option value={'https://www.instagram.com/'}>Instagram</option>
                        <option value={'T.me//'}>Telegram</option>
                    </select>
                    <input
                        onChange={(e) => handle(e)}
                        id="contact_link"
                        value={data.contact_link}
                        type={"contact_link"}
                        name="contact_link"
                        placeholder="Username"
                        className="form-control border-dark ms-2"
                        required
                    />
                </div>
                <div className="d-flex mt-4">
                    <select
                        onChange={(e) => handle(e)}
                        className="select-btn form-control border-dark me-2"
                        name="city"
                        id="city"
                    >
                        {city &&
                            city?.map((item, index) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                    </select>

                    <select
                        onChange={(e) => handle(e)}
                        className="select-btn form-control border-dark ms-2"
                        name="language"
                        id="language"
                    >
                        {language &&
                            language?.map((item, index) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                    </select>
                </div>
            </form>
            <div>
                <div onClick={refResh}>
                    <button
                        type="submit"
                        onClick={contact}
                        className="btn submit-button btn-primary w-25"
                    >
                        {content.submit}
                    </button>
                </div>
            </div>
            <Owldemo2/>
            <ToastContainer/>
        </div>
    );
}

export default Contact;
