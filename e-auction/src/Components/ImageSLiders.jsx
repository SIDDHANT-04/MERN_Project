import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from './Images/Img_1.jpg';
import Img2 from './Images/Img_2.jpg';
import Img3 from './Images/Img_3.jpg';
import NavigationBar from "./NavigationBar";
import FooterBar from "./FooterBar"
const imgStyle = {
  objectFit: 'cover',  
  maxHeight: '650px', 
};

export function ImgSlider() {
  return (
    <>
    <NavigationBar/>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={Img1}
        alt="First slide"
        style={imgStyle}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={Img2}
        alt="Second slide"
        style={imgStyle}
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={Img3}
        alt="Third slide"
         style={imgStyle}
      />
    </Carousel.Item>
  </Carousel>
    <FooterBar/>
    </>
   
  );
}

export default ImgSlider;