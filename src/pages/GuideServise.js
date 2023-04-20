import React from "react";
import MyNavbar from "../header-footer/MyNavbar";
import "../pages/guideServise.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Owldemo1 from "../header-footer/OwlCarousel";
import { useState, useEffect } from "react";
import axios from "axios";
import Owldemo2 from "../components/OwlCarouselRegion";
import { Link } from "react-router-dom";
import Linkogo from '../pages/Linkogo';
import {CITY_ID, getLang, LANG} from "../locals";
import {API} from '../pages/api';
import text from "../locals/text.json";

const GuideServise = () => {
  const [image, setImageData] = useState([]);
  const Lang = getLang();
  const [content, setContent] = useState({})
  const set_city_id = (id) => {
      localStorage.setItem(CITY_ID, id);
  };
  useEffect(() => {
    axios
      .get(`${API}${Lang}/api/v1/guid/city/`)
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      if (localStorage.getItem(LANG) === 'english') {
          setContent(text.english)
      } else if (localStorage.getItem(LANG) === 'russian') {
          setContent(text.russian)
      }else {setContent(text.english)}
  }, []);

  return (
    <>
      <MyNavbar />
      <Owldemo1 />

      <Linkogo/>
      <div className="container">
        <div className="row pb-0">
          <h1 className="pb-2 text-center marginTop">{content.cities}</h1>
          <div className="photo-title-regions">
            {image &&
              image.map((item, index) => {
                return (
                  <div className="regionPhotos">
                    <div className="col-xl-3 imgstyleline linestyle">
                      <div key={index} className="imageRegion ">
                        <div className="imageRegion">
                          <Link to={`/city/${item?.id}`} onClick={() => set_city_id(item.id)}>
                            <img
                              style={{
                                width: 300,
                                height: 200,
                                borderRadius: 8
                              }}
                              className="image mb-2 mx-4"
                              src={item?.images}
                              alt="#"
                            />
                          </Link>
                          <h4 className="text-center citi">{`${item.name}`}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Owldemo2 />
        </div>
      </div>
    </>
  );
};
export default GuideServise;
