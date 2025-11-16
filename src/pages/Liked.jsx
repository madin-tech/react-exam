import { useContext } from "react";
import eye from "../assets/eye2.svg";
import Recommended from "../components/Recommended";
import { Newcontext } from "../Newcontext/Newcontext";
import { useTranslation } from "react-i18next";
import noData from "../assets/no-data.png";
const Liked = () => {
  const { t } = useTranslation();
  const { liked } = useContext(Newcontext);

  return (
    <section className="container liked-pg">
      {liked.length == 0 && (
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            marginLeft: `180px`,
          }}
        >
          <img
            data-v-95589494=""
            style={{ height: `250px`, width: `250px` }}
            src={noData}
            class="empty-page__image"
          />
          <h4 className="noLiked">{t("noLiked.no")}</h4>
        </div>
      )}
      {liked.length > 0 && (
        <div className="liked-cards">
          {liked?.map((item) => (
            <div className="liked-card" key={item.id}>
              <div className="liked-card-img"></div>
              <div className="liked-card-right">
                <h6 className="liked-card-title">{item.title}</h6>
                <p className="liked-card-description">{item.body}</p>
                <div className="card-bottom">
                  <div className="topic-of-card">
                    <img src={eye} className="eye" alt="" />
                    <p className="cards-p">{item.views}</p>
                  </div>
                  <p className="cards-time"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Recommended />
    </section>
  );
};

export default Liked;
