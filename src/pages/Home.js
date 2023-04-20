import React from "react";
import { useState, useEffect } from "react";
import "../pages/home.css";
import Owldemo1 from "../header-footer/OwlCarousel";
import { Link } from "react-router-dom";
import axios from "axios";
import Linkogo from "../pages/Linkogo";
import {LANGUAGE_NAME, LANGUAGE_ID, LANG} from "../locals";
import Owldemo2 from "../components/OwlCarouselRegion";
import { API } from "../pages/api";
import text from "../locals/text.json";



function Home() {
  const [language, setLanguage] = useState([]);
  const [content, setContent] = useState({})

  const changeLang = (language_name, language_id) => {
    if (language_name !== localStorage.getItem(LANGUAGE_NAME)) {
      localStorage.setItem(LANGUAGE_NAME, language_name);
      localStorage.setItem(LANGUAGE_ID, language_id);
      if (language_name === 'ru'){
          localStorage.setItem(LANGUAGE_NAME, '')
      }
    }
  };
  useEffect(() => {
    axios
      .get(`${API}api/v1/guid/language/`)
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
      }else {
          setContent(text.english)}
  }, []);

  return (
    <div className="text-center">
        <Owldemo1></Owldemo1>
        <Linkogo></Linkogo>
        <h1 className="choose-lang ">{content.lang}</h1>
      <div className="constraction d-flex language">
        {language &&
          language?.map((item, index) => {
            return (
              <div className="col-xl-md lang-flag">
                <Link
                  onClick={() => changeLang(item.contraction, item.id)}
                  to={"/GuideServise"}
                >
                  <div key={index} className="mx-3 my-3 lang-1 ">
                    <img
                      className="border-dark lang mb-3"
                      style={{ width: 200, height: 80, flexWrap: "no-wrap" }}
                      src={item.get_image}
                      alt=""
                    />

                    <div className="lang-text">
                      <p className="global-text text-dark">{item.name}</p>
                    </div>
                    <div className="d-none">{item.contraction}</div>
                  </div>
                </Link>
              </div>
            );
          })}

        <div className="marginleft" style={{ width: "100%" }}>
          <Owldemo2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
