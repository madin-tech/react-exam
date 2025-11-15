import eye from "../assets/eye-solid-full (1).svg";
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";
import Recommended from "../components/Recommended";
const Detail = () => {
  return (
    <section className=" detail-pg container">
      <div className="detail-left">
        <h2 className="detail-title">
          Гаттузо ўз мухлисларини кескин танқид қилди
        </h2>
        <div className="detail-info">
          <p>tema </p>
          <div className="detail-count">
            <img src={eye} className="eye" alt="" />
            <p>1230</p>
          </div>
        </div>
        <img
          className="detail-img"
          src="https://cdn.beta.qalampir.uz/uploads/7X/f_7fP8MOQTtAo6W8K0khziVrQLvCCPZA.jpg"
          alt="image"
          title="image"
        />
        <div className="detail-description-box">
          <h5 className="detail-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            culpa, maiores, illo explicabo accusantium, optio iusto corporis
            quisquam maxime expedita totam perspiciatis ratione natus saepe
            architecto libero aut quaerat eius praesentium officia! Mollitia
            ipsam fuga ducimus reiciendis necessitatibus minus ab aut debitis!
            Obcaecati quasi similique doloribus vero, qui aperiam dolorum sunt
            distinctio iusto at rem facilis repudiandae maxime totam quis facere
            sapiente? Beatae ut vel perspiciatis possimus! Non, nihil porro!
            Temporibus reprehenderit excepturi consequatur cupiditate minus,
            saepe vel quisquam praesentium ut nesciunt voluptatibus
            exercitationem officia iure enim vitae sed beatae totam debitis
            quaerat alias nemo deserunt ipsa eaque. Id beatae error non iusto
            alias, inventore doloremque fuga quasi quos consectetur temporibus
            eius autem atque tempore possimus optio hic! Soluta ducimus beatae
            voluptates cupiditate repellat aliquam, delectus impedit deserunt
            incidunt quis. Dolorem eaque exercitationem repudiandae magnam,
            explicabo accusantium est quasi vel officiis ex labore eligendi
            optio debitis quaerat cupiditate ut autem reiciendis consectetur
            architecto sint rerum sed. Quis, neque commodi deserunt molestiae,
            cupiditate, pariatur nostrum quidem aliquid dicta atque eaque.
            Pariatur aut laborum cupiditate nihil sed blanditiis accusantium
            eligendi? Distinctio iusto autem repudiandae nihil tempora assumenda
            ipsam fuga quis delectus magni. Ullam vitae distinctio a
            exercitationem possimus, assumenda officiis natus facilis esse neque
            saepe recusandae sed dolorum ex, tenetur maxime illum in voluptatem
            sunt magni? Cupiditate adipisci possimus consectetur ullam repellat
            quo aspernatur mollitia ratione similique officiis cumque saepe
            dignissimos temporibus modi in tenetur numquam, fuga unde hic minima
            vitae quam. Animi harum quidem unde, quis voluptas, nulla facilis
            quo suscipit repellendus magnam necessitatibus reprehenderit quaerat
            vitae repudiandae. Vitae hic veniam quibusdam tempora numquam
            consequuntur commodi ipsam porro, voluptatem enim qui corporis
            eveniet animi adipisci nam placeat obcaecati nostrum debitis! A
            deleniti eveniet consequuntur vitae laudantium nobis totam
            voluptatibus dolores nihil, accusamus beatae repellat possimus
            obcaecati perspiciatis sint tenetur quis quibusdam? Cum eaque,
            repellendus recusandae unde, incidunt, aut quidem soluta dolorem
            nobis provident saepe. Saepe voluptas ipsam error aliquam ut?
            Repellat placeat doloribus inventore facere nisi odio quia alias?
            Repellendus minus obcaecati fugit cumque quis magni inventore
            officia quas vel nobis? Perspiciatis, in. Quas numquam quia impedit
            tempora facilis assumenda libero quidem! Quae, laudantium. Atque
            nulla corrupti enim vitae aspernatur incidunt beatae possimus,
            quisquam ratione fuga totam repudiandae quas quos at repellat facere
            provident alias veniam facilis sed tenetur accusamus magnam? Amet
            excepturi veniam corrupti beatae nemo, sit recusandae nulla cumque
            dignissimos natus? Assumenda natus quibusdam repellat reiciendis
            voluptatum nihil iste.
          </h5>
        </div>
        <div className="detail-bottom">
          <div className="detail-bottom-author">
            <img
              className="author-img"
              src="https://cdn.beta.qalampir.uz/uploads/eX/thumb_gZQZMcwFcQj91RwqeyeyVC4iCShaGB.jpg"
            />
            <p style={{ margin: `0` }}>john</p>
          </div>
          <div className="reaction-box">
            <div className="share-box">
              <svg
                className="share"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4275 7L8.75 4.3225V5.7575L8.24833 5.83334C5.73417 6.18917 4.03083 7.5075 3.05667 9.52584C4.41 8.56917 6.09 8.10834 8.16667 8.10834H8.75V9.6775M7.58333 8.70334C4.97583 8.82584 3.10917 9.765 1.75 11.6667C2.33333 8.75 4.08333 5.83334 8.16667 5.25001V2.91667L12.25 7L8.16667 11.0833V8.69167C7.97417 8.69167 7.78167 8.6975 7.58333 8.70334Z"
                  fill="black"
                />
              </svg>
              <p style={{margin:`0`}}>Share</p>
            </div>

            <svg
              className="heart"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.03539 5.26875C8.33 4.9695 8.49367 4.56547 8.49039 4.14555C8.4871 3.72562 8.31714 3.3242 8.01789 3.02959C7.86971 2.88371 7.69426 2.76845 7.50154 2.69038C7.30882 2.61231 7.10261 2.57297 6.89468 2.57459C6.47476 2.57787 6.07333 2.74784 5.77872 3.04709C5.69872 3.12709 5.59706 3.22528 5.47372 3.34167L5.13081 3.66459L4.78789 3.34167C4.66428 3.225 4.56247 3.12681 4.48247 3.04709C4.18554 2.75016 3.78281 2.58334 3.36289 2.58334C2.94296 2.58334 2.54024 2.75016 2.24331 3.04709C1.63164 3.65917 1.62456 4.64875 2.22081 5.26375L5.13081 8.17375L8.03539 5.26875ZM1.88956 2.69375C2.08302 2.50024 2.31271 2.34673 2.5655 2.242C2.8183 2.13727 3.08926 2.08337 3.36289 2.08337C3.63652 2.08337 3.90748 2.13727 4.16027 2.242C4.41307 2.34673 4.64276 2.50024 4.83622 2.69375C4.91206 2.76987 5.01025 2.86459 5.13081 2.97792C5.25081 2.86459 5.349 2.76973 5.42539 2.69334C5.8131 2.29966 6.34132 2.07612 6.89385 2.0719C7.44638 2.06768 7.97796 2.28312 8.37164 2.67084C8.76532 3.05855 8.98886 3.58677 8.99308 4.1393C8.9973 4.69183 8.78185 5.22341 8.39414 5.61709L5.42539 8.58625C5.34725 8.66437 5.24129 8.70825 5.13081 8.70825C5.02032 8.70825 4.91436 8.66437 4.83622 8.58625L1.86664 5.61667C1.48582 5.22392 1.27477 4.69714 1.27906 4.1501C1.28334 3.60306 1.50263 3.07965 1.88956 2.69292V2.69375Z"
                fill="black"
              />
            </svg>

            <div className="like-box">
              <img className="like" src={like} alt="" />
              <p>1200</p>
            </div>
            <img className="dislike" src={dislike} alt="" />
          </div>
        </div>
      </div>
<Recommended/>
 
    </section>
  );
};

export default Detail;
