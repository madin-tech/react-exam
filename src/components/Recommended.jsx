import { useTranslation } from "react-i18next";
import eye from "../assets/eye-solid-full (1).svg";
import { posts } from "../recommended/rec";
const Recommended = () => {
  const {t} = useTranslation();

  return (
    <div className="recommended">
      <h4>{t("recommended.rec")}</h4>
      <div className="rec-cards">
        {posts.map((post) => (
          <div key={post.id} className="rec-card">
            <div
              className="detail-recomended-img"
              style={{
                backgroundImage: `url(https://picsum.photos/400?random=${post.id})`,
                backgroundSize:`cover`,
                backgroundPosition:`center`
              }}
            ></div>
            <div className="rec-texts">
              <div className="rec-title-box">
                <h6>{post.title}</h6>
              </div>
              <div className="rec-infos">
                <div className="topic-of-card">
                  <img src={eye} className="eye" alt="" />
                  <p className="cards-p">{post.views}</p>
                </div>
                <p className="cards-p">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
