import eye from "../assets/eye-solid-full (1).svg";
const Recommended = () => {
  return (
    <div className="recommended">
      <h4>Recommended</h4>
      <div className="rec-cards">
        <div className="rec-card">
          <div className="detail-recomended-img"></div>
          <div className="rec-texts">
            <div className="rec-title-box">
              <h6>O'zbekistonda metan narxi keskin ko'tarildi</h6>
            </div>
            <div className="rec-infos">
              <div className="topic-of-card">
                <img src={eye} className="eye" alt="" />
                <p className="cards-p">1230</p>
              </div>
              <p className="cards-p">Date</p>
            </div>
          </div>
        </div>
        <div className="rec-card">
          <div className="detail-recomended-img"></div>
          <div className="rec-texts">
            <div className="rec-title-box">
              <h6>O'zbekistonda metan narxi keskin ko'tarildi</h6>
            </div>
            <div className="rec-infos">
              <div className="topic-of-card">
                <img src={eye} className="eye" alt="" />
                <p className="cards-p">1230</p>
              </div>
              <p className="cards-p">Date</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
