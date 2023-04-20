import React, {useEffect, useState} from 'react';
import '../header-footer/myNavbar.css';
import {Link} from 'react-router-dom';
import twitter from '../assets/twitter.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../assets/Facebook_icon.png';
import telegram from '../assets/telegram-icon.png';
import instagram from '../assets/Instagram-Image.png';
import menuicon from '../img/menu-icon.png';
import text from "../locals/text.json";
import {LANG} from '../locals';
import en from "../img/lang_3.png";
import ru from "../img/lang_1.png";

function MyNavbar() {
    function setLang(e) {
        localStorage.setItem(LANG, e)
        window.location.reload()
    }

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
        <div className='container-fluid image-header fly'>
            <nav className="navbar navbar-expand-md container">
                <a className="navbar-brand" href={"/"}>{content.site_name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                    <img className='menu-icon' src={menuicon} alt=''/>
                </button>
                <div className="collapse navbar-collapse navlink" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link navitemend" to={"contact"}>{content.contact}</Link>
                        </li>
                        <li className="d-flex ">
                            <div className="lang-image me-2" onClick={()=>{setLang("english")}}>
                                <img className="imglanguage" src={en}/>
                            </div>
                            <div className="lang-image" onClick={() => {setLang("russian")}}>
                                <img className="imglanguage" src={ru}/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link number-phone" href={"tel:+998 05 001 99 44"}>+998 50 001 99 44</a>
                        </li>
                        <li>
                            <div className='navback bg-transparent'>
                                <a href="https://www.facebook.com/profile.php?id=100091562413167"><img
                                    className='facebook' src={facebook} alt=""/></a>
                                <a href="https://t.me/+998500019944"><img className='telegram' src={telegram} alt=""/></a>
                                <a href="https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM="><img
                                    className='instagram' src={instagram} alt=""/></a>
                                <a href="https://wa.me/qr/ZNXWW65DCEKUN1"><img className='twitter' src={twitter}
                                                                                alt=""/></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            </nav>

        </div>
    );
}

export default MyNavbar;