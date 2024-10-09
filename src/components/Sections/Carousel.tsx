import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AngularIcon from 'components/Icon/AngularIcon';
import IonicIcon from 'components/Icon/IonicIcon';
import GradleIcon from 'components/Icon/GradleIcon';
import TypescriptIcon from 'components/Icon/TypescriptIcon';
import DockerIcon from 'components/Icon/DockerIcon';
import JasmineIcon from 'components/Icon/JasmineIcon';
import AndStudIcon from 'components/Icon/AndStudIcon';
import BootstrapIcon from 'components/Icon/BootstrapIcon';
// import { useMediaQuery } from 'react-responsive';
// import Section from "components/Layout/Section";
// import {SectionId} from '../../data/data';

export default class AutoPlay extends Component {
  slidesToShow: number = 6;

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({hideNav: window.innerWidth <= 760});
    this.setIsMobile();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  setIsMobile() {
    const isMobile = window.innerWidth <= 760;
    if (!isMobile) {
      this.slidesToShow = 6;
      return 6;
    } else {
      this.slidesToShow = 4;
      return 4;
    }
  }

  render() {
    const settings = {
      // dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: this.slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      // cssEase: 'linear',
    };
    return (
      <div className="mt-4 bg-slate-300 rounded-2xl">
        <Slider {...settings}>
          <div className="carousel">
            <AngularIcon className="h-10 w-10 sm:h-14 sm:w-14" />
          </div>
          <div className="carousel">
            <IonicIcon className="h-10 w-10 sm:h-16 sm:w-16" />
          </div>
          <div className="carousel">
            <TypescriptIcon className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>
          <div className="carousel">
            <DockerIcon className="h-14 w-14 sm:h-20 sm:w-20" />
          </div>
          <div className="carousel">
            <JasmineIcon className="h-14 w-14 sm:h-20 sm:w-20" />
          </div>
          <div className="carousel">
            <AndStudIcon className="h-30 w-30" />
          </div>
          <div className="carousel">
            <BootstrapIcon className="h-12 w-12 sm:h-20 sm:w-20" />
          </div>
          <div className="carousel">
            <GradleIcon className="h-30 w-30" />
          </div>
        </Slider>
      </div>
    );
  }
}
