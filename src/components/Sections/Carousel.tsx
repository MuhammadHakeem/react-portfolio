import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AngularIcon from 'components/Icon/AngularIcon';
import IonicIcon from 'components/Icon/IonicIcon';
import GradleIcon from 'components/Icon/GradleIcon';
import TypescriptIcon from 'components/Icon/TypescriptIcon';
import DockerIcon from 'components/Icon/DockerIcon';
import JasmineIcon from 'components/Icon/JasmineIcon';
import AndStudIcon from 'components/Icon/AndStudIcon';
import BootstrapIcon from 'components/Icon/BootstrapIcon';


export default class AutoPlay extends Component {
  render() {
    const settings = {
      // dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 0,
      cssEase: "linear",

    };
    return (
      <div className="pt-10">
        <Slider {...settings}>
          <div className="carousel">
            <AngularIcon className="h-14 w-14" />
          </div>
          <div className="carousel">
            <IonicIcon className="h-30 w-30" />
          </div>
          <div className="carousel">
            <TypescriptIcon className="h-12 w-12"/>
          </div>
          <div className="carousel">
            <DockerIcon className="h-20 w-20"/>
          </div>
          <div className="carousel">
            <JasmineIcon className="h-20 w-20"/>
          </div>
          <div className="carousel">
            <AndStudIcon className="h-30 w-30"/>
          </div>
          <div className="carousel">
            <BootstrapIcon className="h-20 w-20"/>
          </div>
          <div className="carousel">
            <GradleIcon className="h-30 w-30"/>
          </div>
        </Slider>
      </div>
    );
  }
}