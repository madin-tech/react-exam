import eye from "../assets/eye2.svg";
import Recommended from "../components/Recommended";
const Liked = () => {
  return (
    <section className="container liked-pg">
      <div className="liked-cards">
        <div className="liked-card">
          <div className="liked-card-img"></div>
          <div className="liked-card-right">
            <h6 className="liked-card-title">Card title</h6>
            <p className="liked-card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
              nobis, cumque, totam soluta, beatae nulla tempora eaque ducimus
              eum nostrum expedita voluptatem? Veniam esse qui hic cumque illum
              voluptatum quidem quae, mollitia quasi alias non tempora nam
              vitae? Et, ipsum. Est harum corrupti, in, nulla reprehenderit
              temporibus fuga assumenda eveniet quam debitis ducimus non unde
              quaerat natus? Nostrum autem praesentium quisquam illum molestiae
              libero tempore, suscipit id numquam alias magni doloremque
              quibusdam qui! Architecto, cum provident fugiat porro dignissimos
              quo voluptatibus cupiditate nesciunt quod nostrum? Pariatur
              laborum veritatis veniam similique modi consequuntur, rem, fuga
              vero inventore adipisci at hic molestiae deleniti quos porro alias
              quae aperiam ratione aut minima, iusto dicta eius quas. Beatae
              exercitationem tenetur unde voluptate ullam quos molestiae
              incidunt mollitia velit laborum enim, similique, earum suscipit
              dolor. Ex provident voluptatum autem sint dolor id, voluptas
              perferendis ipsa aperiam similique quos omnis, suscipit blanditiis
              soluta nesciunt ad neque ducimus enim cumque saepe sunt numquam
              explicabo? Alias hic earum fuga praesentium tempora odit delectus
              minus minima, quae iste vel aliquam nihil. Neque dolore beatae
              voluptatibus, corporis similique animi vel quis, esse obcaecati
              iste quod nobis. Nostrum consequuntur cupiditate illum porro
              adipisci, quas, officia fugiat unde earum, animi ipsum.
            </p>
            <div className="card-bottom">
              <div className="topic-of-card">
                <img src={eye} className="eye" alt="" />
                <p className="cards-p">1230</p>
              </div>
              <p className="cards-time">16:32</p>
            </div>
          </div>
        </div>
        <div className="liked-card">
          <div className="liked-card-img"></div>
          <div className="liked-card-right">
            <h6 className="liked-card-title">Card title</h6>
            <p className="liked-card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
              nobis, cumque, totam soluta, beatae nulla tempora eaque ducimus
              eum nostrum expedita voluptatem? Veniam esse qui hic cumque illum
              voluptatum quidem quae, mollitia quasi alias non tempora nam
              vitae? Et, ipsum. Est harum corrupti, in, nulla reprehenderit
              temporibus fuga assumenda eveniet quam debitis ducimus non unde
              quaerat natus? Nostrum autem praesentium quisquam illum molestiae
              libero tempore, suscipit id numquam alias magni doloremque
              quibusdam qui! Architecto, cum provident fugiat porro dignissimos
              quo voluptatibus cupiditate nesciunt quod nostrum? Pariatur
              laborum veritatis veniam similique modi consequuntur, rem, fuga
              vero inventore adipisci at hic molestiae deleniti quos porro alias
              quae aperiam ratione aut minima, iusto dicta eius quas. Beatae
              exercitationem tenetur unde voluptate ullam quos molestiae
              incidunt mollitia velit laborum enim, similique, earum suscipit
              dolor. Ex provident voluptatum autem sint dolor id, voluptas
              perferendis ipsa aperiam similique quos omnis, suscipit blanditiis
              soluta nesciunt ad neque ducimus enim cumque saepe sunt numquam
              explicabo? Alias hic earum fuga praesentium tempora odit delectus
              minus minima, quae iste vel aliquam nihil. Neque dolore beatae
              voluptatibus, corporis similique animi vel quis, esse obcaecati
              iste quod nobis. Nostrum consequuntur cupiditate illum porro
              adipisci, quas, officia fugiat unde earum, animi ipsum.
            </p>
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
      <Recommended/>
    </section>
  );
};

export default Liked;
