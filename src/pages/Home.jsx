import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import eye from "../assets/eye2.svg";
import "swiper/css";
import "swiper/css/pagination";
import vector from "../assets/arrow.svg";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

import { Autoplay, Pagination } from "swiper/modules";
const Home = () => {
  const images1 = [img6, img7, img8];
  const images2 = [img3, img4, img5];
  return (
    <section className="container">
      <div className="hero-pg">
        <div className="hero-pg-left">
          <div className="html">
            <div className="body">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className="first">Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div
            className="hero-card"
            style={{
              backgroundImage: `url(${img2})`,
              objectFit: `cover`,
              backgroundPosition: `center`,
            }}
          >
            <h4>some Post</h4>
            <p className="hero-card-time">14:08</p>
          </div>
        </div>
        <div className="hero-pg-right">
          <div className="hero-pg-right-left">
            {images1.map((item, index) => (
              <div
                className="hero-card"
                key={index}
                style={{
                  backgroundImage: `url(${item})`,
                  objectFit: `cover`,
                  backgroundPosition: `center`,
                }}
              >
                <h4>some Post</h4>
                <p className="hero-card-time">14:08</p>
              </div>
            ))}
          </div>
          <div className="hero-pg-right-left">
            {images2.map((item, index) => (
              <div
                className="hero-card"
                key={index}
                style={{
                  backgroundImage: `url(${item})`,
                  objectFit: `cover`,
                  backgroundPosition: `center`,
                }}
              >
                <h4>some Post</h4>
                <p className="hero-card-time">14:08</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cards-page">
        <div className="card-page-top">
          <h5>Sport</h5>
          <div className="all">
            <h6>Barchasi</h6>
            <img src={vector} className="vector" alt="" />
          </div>
        </div>
        <div className="cards-page-left">
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
          <div className="left-card">
            <div className="left-card-img"></div>
            <div className="card-right">
              <div className="card-title-box">
                <h6 className="cards-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
              </div>
              <div className="card-bottom">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">1230</p>
                </div>
                <p className="cards-time">16:32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
