import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import eye from "../assets/eye2.svg";
import "swiper/css";
import "swiper/css/pagination";
import vector from "../assets/arrow.svg";
import useFetch from "../hooks/useFetch";
import { Autoplay, Pagination } from "swiper/modules";
import Slide from "../components/Slide";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import { useNavigate } from "react-router-dom";
import Recommended from "../components/Recommended";
import { useTranslation } from "react-i18next";

const images1 = [img6, img7, img8];
const images2 = [img3, img4, img5];

const Home = () => {
  const { data, isLoading } = useFetch("https://dummyjson.com/posts");
  const navigate = useNavigate();

  const { t } = useTranslation();
  function openDetail(id) {
    data.map((card) => {
      if (card.id == id) {
        navigate(`/detail/${id}`);
      }
    });
  }
  console.log(data);

  return (
    <>
      <div className="loadingCards container">
        {isLoading &&
          [...Array(20)].map((_, index) => (
            <div key={index}>
              <div className="card" aria-hidden="true">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {!isLoading && (
        <>
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
                      {data.map((item) => (
                        <SwiperSlide
                          key={item.id}
                          className=""
                          style={{
                            backgroundImage: `url(https://picsum.photos/400?random=${item.id})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`,
                          }}
                        >
                          {item.title}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div
                  className="hero-card"
                  style={{ backgroundImage: `url(${img1})` }}
                >
                  <h4 style={{ fontSize: `16px`, color: `white` }}>
                    Some Post
                  </h4>
                  <p className="hero-card-time" style={{ color: `white` }}>
                    14:08
                  </p>
                </div>
              </div>
              <div className="hero-pg-right">
                <div className="hero-pg-right-left">
                  {images1.map((item, index) => (
                    <div
                      key={index}
                      className="hero-card"
                      style={{ backgroundImage: `url(${item})` }}
                    >
                      <h4 style={{ fontSize: `16px`, color: `white` }}>
                        Some Post
                      </h4>
                      <p className="hero-card-time" style={{ color: `white` }}>
                        14:08
                      </p>
                    </div>
                  ))}
                </div>
                <div className="hero-pg-right-left">
                  {images2.map((item, index) => (
                    <div
                      key={index}
                      className="hero-card"
                      style={{
                        backgroundImage: `url(${item})`,
                        objectFit: `cover`,
                        backgroundPosition: `center`,
                      }}
                    >
                      <h4 style={{ fontSize: `16px`, color: `white` }}>
                        Some Post
                      </h4>
                      <p className="hero-card-time" style={{ color: `white` }}>
                        14:08
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="home-box">
              <div className="cards-page">
                <div className="card-page-top">
                  <h5>Sport</h5>
                  <div className="all">
                    <h6>{t("barchasi.all")}</h6>
                    <img src={vector} className="vector" alt="" />
                  </div>
                </div>
                <div className="cards-page-left">
                  {data.map((card) => (
                    <div
                      className="left-card"
                      key={card.id}
                      onClick={() => openDetail(card.id)}
                    >
                      <div
                        className="left-card-img"
                        style={{
                          backgroundImage: `url(https://picsum.photos/400?random=${card.id})`,
                          backgroundSize: `cover`,
                          backgroundPosition: `center`,
                        }}
                      ></div>
                      <div className="card-right">
                        <div className="card-title-box">
                          <h6 className="cards-title">{card.title}</h6>
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
                  ))}
                </div>
              </div>
              <Recommended />
            </div>
          </section>
          <Slide data={data} />
        </>
      )}
    </>
  );
};

export default Home;
