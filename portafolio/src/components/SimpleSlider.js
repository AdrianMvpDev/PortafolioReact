import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SimpleSlider.module.css';
import { CardsSisca } from './Cards/CardsSisca';
import { CardsFanaticos } from './Cards/CardsFanaticos';
import { CardsSurti } from './Cards/CardsSurti';

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      slidesToShow: 2,
    };
    let width = window.innerWidth;
    if (width <= 600) {
      settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      };
    } else {
      settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      };
    }
    return (
      <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.card}>
            <CardsSisca />
          </div>
          <div className={styles.card}>
            {/* <Cards /> */}
            <CardsFanaticos />
          </div>
          <div className={styles.card}>
            {/* <Cards /> */}
            <CardsSurti />
          </div>
        </Slider>
      </div>
    );
  }
}
