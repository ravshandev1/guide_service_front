import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import Linkogo from "../pages/Linkogo";
import Birnima from "../pages/Birnima";
import "../components/componentB.css";
import {getLang_id, get_city_id, LANG} from "../locals";
import ContactNav from "../header-footer/ContactNav";
import {format} from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import {API} from "../pages/api";
import text from "../locals/text.json";
import GuidCarousel from "./GuidCarousel";
import CommentCarousel from "../header-footer/CommentCarousel";

const ComponentB = (props) => {
    const {id} = props;
    const language_id = getLang_id();
    const city_id = get_city_id();
    const [language, setLanguage] = useState([])
    const [guid, setGuid] = useState()
    const [days, setDays] = useState([])
    const [content, setContent] = useState({})
    const [comments, setComments] = useState([])


    const getLanguages = () => {
        axios.get(`${API}api/v1/guid/language/`)
            .then((res) => {
                setLanguage(res.data)
            })
    }
    const getGuid = () => {
        axios.get(`${API}api/v1/guid/${id}/`)
            .then((res) => {
                setGuid(res.data)
                setDays(res.data.days)
                setComments(res.data.rate)
            })
    }
    useEffect(() => {
        getLanguages()
        getGuid()
        if (localStorage.getItem(LANG) === 'english') {
            setContent(text.english)
        } else if (localStorage.getItem(LANG) === 'russian') {
            setContent(text.russian)
        } else {
            setContent(text.english)
        }
    }, []);


    function refResh() {
        window.location.reload(false);
    }

    const [data, setdata] = useState({
        name: "",
        phone: "",
        check_in_time: "",
        check_out_time: "",
        email: "",
        contact_link: "",
        city: "",
        language: "",
        contact_type: ""
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
    const booking = (e) => {
        e.preventDefault();
        axios.post(`${API}api/v1/guid/booking/`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            contact_link: `${data.contact_type}${data.contact_link}`,
            city: parseInt(city_id),
            guid: parseInt(id),
            check_in_time: data.check_in_time,
            check_out_time: data.check_out_time,
            language: parseInt(language_id)
        })
        alert('Message sent successfully!')
        // toast.success('Message sent successfully!')
    };

    return (<>
        <ContactNav/>
        <Linkogo/>
        <div className="container-fluid guid-w p-0">
            <div className="guid-w-i">
                <div className="media-guid-image">
                    <img
                        className="guid-image"
                        style={{width: 250, height: 250, borderRadius: 8}}
                        src={guid?.get_image}
                        alt="#"
                    />
                </div>
                <div className="bios">
                    <div className="text-bio mt-3">
                        <p style={{fontWeight: "700", fontSize: "24px"}}>
                            {guid?.name}
                        </p>
                        <p className="bio">{guid?.bio}</p>
                    </div>
                    <Birnima days={days}/>
                </div>
            </div>
            <div>
                <h3 className="text-center">{content.book}</h3>
                <div className="my-5 px-5">
                    <div className="d-flex justify-space-between mt-4">
                        <input
                            onChange={(e) => handle(e)}
                            id="name"
                            value={data.name}
                            type={"text"}
                            name="name"
                            placeholder="Name"
                            className="form-control me-2 border-dark"
                            required
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
                    <div className="d-flex justify-space-between mt-2">
                        <label name={"data"} className={"dates"} style={{marginRight: 7}}>
                            From
                            <input
                                onChange={(e) => handle(e)}
                                id="check_in_time"
                                value={data.check_in_time}
                                type={"datetime-local"}
                                name="date"
                                format={format}
                                placeholder="from"
                                className="form-control border-dark"
                                required
                            />
                        </label>
                        <label name={"data"} className={"dates"} style={{marginLeft: 7}}>
                            Till
                            <input
                                onChange={(e) => handle(e)}
                                id="check_out_time"
                                value={data.check_out_time}
                                type={"datetime-local"}
                                name="date"
                                format={format}
                                placeholder="till"
                                className="form-control border-dark"
                                required
                            />
                        </label>
                    </div>
                    <div className="d-flex justify-space-between mt-4">

                        <input
                            onChange={(e) => handle(e)}
                            id="email"
                            value={data.email}
                            type={"email"}
                            name="email"
                            placeholder="Email"
                            className="form-control border-dark me-2"
                        />
                        <select
                            onChange={(e) => handle(e)}
                            className="select-btn form-control border-dark ms-2"
                            name="language"
                            id="language"
                            required
                        >
                            {language && language?.map((item, index) => (
                                <option value={item.id}>{item.name}</option>))}
                        </select>
                    </div>
                    <div className="d-flex justify-space-between mt-4">
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
                </div>
                <div>
                    <div onClick={refResh}>
                        <button
                            type="submit"
                            onClick={booking}
                            className="btn suriw submit-button btn-primary text-center w-25"
                        >
                            {content.submit}
                        </button>
                    </div>
                </div>
            </div>
            <GuidCarousel/>
            <CommentCarousel comments={comments}/>
        </div>
    </>);
};
export default ComponentB;
