import React, { useState } from "react";
import "./image-slider.styles.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import img from "../../assets/1.jfif";
import img2 from "../../assets/2.jfif";
import img3 from "../../assets/3.jfif";
import img4 from "../../assets/4.jfif";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(img4);
  const [page, setPage] = useState(0);
  const [picture, setPicture] = useState([img2, img3, img]);
  const [statement, setStatement] = useState([
    "London is Home",

    "She is so beautiful",

    "Life of a Photographer",
  ]);

  return (
    <div className="container">
      <div className="body">
        <div className="top__section">
          <div className="imageTop__container">
            <img className="image" alt="" src={image} />
          </div>
          <div className="topSection__inputs">
            <label htmlFor="pix" className="input__label">
              Upload your image
            </label>
            <input id="pix" className="topSection__input" type="file" />
          </div>
        </div>
        <div className="middle__section">
          <input
            className="middleSection__input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="btn">Add</button>
        </div>
        <div className="bottom__section">
          <div className="arrow__container">
            <BiLeftArrow className="arrow" />{" "}
          </div>
          <div>
            <div className="statement">
              {statement[page % statement.length]}
            </div>
            <div className="imageBottom__container">
              <img
                className="image"
                src={picture[page % picture.length]}
                alt=""
              />
            </div>
          </div>

          <div className="arrow__container">
            <BiRightArrow className="arrow" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
