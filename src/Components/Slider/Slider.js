import React from "react";
import "./Slider.css";
import slidepic1 from "./slide-pic1.jpg";
import slidepic2 from "./slide-pic2.jpeg";
import slidepic3 from "./slide-pic3.jpg";
import slidepic4 from "./slide-pic4.jpg";
import slidepic5 from "./slide-pic5.jpg";
import Carouser from "react-elastic-carousel";
import Item from "./Item";

const breackPoints = [
    { width: 1, itemToShow: 1},
    { width: 550, itemToShow: 2},
    { width: 768, itemToShow: 3},
    { width: 1200, itemToShow: 4},
];

export default function Slider() {
    return ( 
        <div>
            <Carouser breakPoints = {breackPoints}>
                <Item><img className = "slider-pic" src = {slidepic1}  alt="slide1"/></Item>
                <Item><img className = "slider-pic" src = {slidepic2} alt="slide2"/></Item>
                <Item><img className = "slider-pic" src = {slidepic3} alt="slide3"/></Item>
                <Item><img className = "slider-pic" src = {slidepic4} alt="slide4"/></Item>
                <Item><img className = "slider-pic" src = {slidepic5} alt="slide5"/></Item>

            </Carouser>
        </div>
    );
}
