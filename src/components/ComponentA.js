import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactNav from "../header-footer/ContactNav";
import "../components/ComponentA.css";
import { Rating, Typography } from "@mui/material";
import Linkogo from "../pages/Linkogo";
import {getLang, LANG} from "../locals";
import Carousel from "./carousel_of_cities";
import {API} from "../pages/api";

const ComponentA = () => {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [image, setImage] = useState([])


  const Lang = getLang();
  useEffect(() => {
    axios
      .get(`${API}${Lang}/api/v1/guid/city/${id}/`)
      .then((res) => {
        setCity(res.data);
        setImage(res.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ContactNav />
      <Linkogo />

      <div>

        <div className="componentA">
          <div className="int">
            <img
              className="m-3 regionimg"
              src={city?.images[0].get_image}
              alt="#"
            />
            <div className="name-disc">
              <h1 className="ms-3 mt-3 name">{city?.name}</h1>
              <div className="m-3 description">{city?.description}</div>
            </div>
          </div>
          <div className="mt-3">
            <div>
              {city &&
                city?.guids?.map((item, index) => {
                  return (
                    <div className="d-flex mx-5" key={index}>
                      <Link
                        className="text-dark d-flex"
                        to={`/guid/${item.id}`}
                        alt="no image"
                      >
                        <img
                          className="mx-3 mb-4 d-flex"
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: "10px"
                          }}
                          src={item.get_image}
                          alt="no image"
                        />

                        <div className="d-block align-items-center">
                          <p
                            className=" "
                            style={{ verticalAlign: "baseline" }}
                          >
                            {item.name}
                          </p>
                          <Rating
                            className="mx-1 "
                            name="simple-controlled"
                            defaultValue={item.get_rating}
                          />
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Carousel image={image}/>
      </div>
    </>
  );
};

export default ComponentA;
