import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import eye from "../assets/eye2.svg";
import "swiper/css";
import "swiper/css/pagination";
import vector from "../assets/arrow.svg";

import { Autoplay, Pagination } from "swiper/modules";
const Home = () => {
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
          <div className="hero-card">
            <h4>some Post</h4>
            <p className="hero-card-time">14:08</p>
          </div>
        </div>
        <div className="hero-pg-right">
          <div className="hero-pg-right-left">
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
          </div>
          <div className="hero-pg-right-left">
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
            <div className="hero-card">
              <h4>some Post</h4>
              <p className="hero-card-time">14:08</p>
            </div>
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
