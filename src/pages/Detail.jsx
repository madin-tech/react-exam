import eye from "../assets/eye-solid-full (1).svg";
import dislike from "../assets/dislike.svg";
import like from "../assets/like.svg";
import Recommended from "../components/Recommended";
import useFetch from "../hooks/useFetch";

import { useParams } from "react-router-dom";
 import { Newcontext } from "../Newcontext/Newcontext";
import { useContext} from "react";
import Slide from "../components/Slide";

const Detail = () => {
   const { data, isLoading, error } = useFetch("https://dummyjson.com/posts");
   const param = useParams();
   const {liked, setLiked } = useContext(Newcontext);
 
   

   let paramId = param.id;
   const cardDetail = data?.find(item => item.id == paramId);
   console.log(cardDetail);
   
  let isInLiked = liked.find((post)=>post.id==cardDetail.id);
  function addLiked(id){
 const inLiked = liked.find((post)=>post.id==id);
  if(!inLiked){
    setLiked([...liked, { ...cardDetail }]);
 }else{
  const filtered = liked.filter((p) => p.id !== id);
  setLiked(filtered);
 }

  }
    
   
 if (error) return <h1 className="container">{error}</h1>
   return (
     <>
       {isLoading ? (
         <div className="loadingCards container">
           {[...Array(30)].map((_, index) => (
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
       ) : (
         <>
           <section className=" detail-pg container">
             <div className="detail-left">
               <h2 className="detail-title">{cardDetail?.title}</h2>
               <div className="detail-info">
                 <div className="detail-count">
                   <img src={eye} className="eye" alt="" />
                   <p></p>
                 </div>
               </div>
               <img
                 className="detail-img"
                 src="https://cdn.beta.qalampir.uz/uploads/7X/f_7fP8MOQTtAo6W8K0khziVrQLvCCPZA.jpg"
                 alt="image"
                 title="image"
               />
               <div className="detail-description-box">
                 <h5 className="detail-description"></h5>
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
                     <p style={{ margin: `0` }}>Share</p>
                   </div>

                   {isInLiked ? (
                     <svg
                       onClick={() => addLiked(cardDetail.id)}
                       className="heart"
                       width="8"
                       height="8"
                       viewBox="0 0 8 8"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         d="M3.75519 1.716C3.59558 1.5531 3.40516 1.42356 3.19501 1.33494C2.98487 1.24632 2.7592 1.20037 2.53113 1.19977C2.30307 1.19918 2.07716 1.24395 1.86656 1.33147C1.65595 1.419 1.46486 1.54753 1.30439 1.7096C0.629194 2.3916 0.632394 3.5 1.31079 4.1852L3.82159 6.7212C3.92559 6.8264 4.09439 6.8264 4.19839 6.7212L6.69639 4.1996C7.02027 3.86873 7.20107 3.4238 7.1998 2.96081C7.19853 2.49781 7.01528 2.05388 6.68959 1.7248C6.52976 1.56168 6.33907 1.43198 6.12864 1.34326C5.9182 1.25454 5.69222 1.20856 5.46385 1.208C5.23548 1.20744 5.00927 1.25232 4.79841 1.34001C4.58754 1.4277 4.39622 1.55646 4.23559 1.7188L3.99719 1.96L3.75519 1.716Z"
                         fill="url(#paint0_linear_28_2)"
                       />
                       <defs>
                         <linearGradient
                           id="paint0_linear_28_2"
                           x1="-0.600006"
                           y1="-0.400001"
                           x2="2.82999"
                           y2="6.7948"
                           gradientUnits="userSpaceOnUse"
                         >
                           <stop stopColor="#F97DBD" />
                           <stop offset="1" stopColor="#D7257D" />
                         </linearGradient>
                       </defs>
                     </svg>
                   ) : (
                     <svg
                       onClick={() => addLiked(cardDetail.id)}
                       className="heart"
                       width="10"
                       height="10"
                       viewBox="0 0 10 10"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         d="M8.03539 5.26875C8.33 4.9695 8.49367 4.56547 8.49039 4.14555C8.4871 3.72562 8.31714 3.3242 8.01789 3.02959C7.86971 2.88371 7.69426 2.76845 7.50154 2.69038C7.30882 2.61231 7.10261 2.57297 6.89468 2.57459C6.47476 2.57787 6.07333 2.74784 5.77872 3.04709C5.69872 3.12709 5.59706 3.22528 5.47372 3.34167L5.13081 3.66459L4.78789 3.34167C4.66428 3.225 4.56247 3.12681 4.48247 3.04709C4.18554 2.75016 3.78281 2.58334 3.36289 2.58334C2.94296 2.58334 2.54024 2.75016 2.24331 3.04709C1.63164 3.65917 1.62456 4.64875 2.22081 5.26375L5.13081 8.17375L8.03539 5.26875ZM1.88956 2.69375C2.08302 2.50024 2.31271 2.34673 2.5655 2.242C2.8183 2.13727 3.08926 2.08337 3.36289 2.08337C3.63652 2.08337 3.90748 2.13727 4.16027 2.242C4.41307 2.34673 4.64276 2.50024 4.83622 2.69375C4.91206 2.76987 5.01025 2.86459 5.13081 2.97792C5.25081 2.86459 5.349 2.76973 5.42539 2.69334C5.8131 2.29966 6.34132 2.07612 6.89385 2.0719C7.44638 2.06768 7.97796 2.28312 8.37164 2.67084C8.76532 3.05855 8.98886 3.58677 8.99308 4.1393C8.9973 4.69183 8.78185 5.22341 8.39414 5.61709L5.42539 8.58625C5.34725 8.66437 5.24129 8.70825 5.13081 8.70825C5.02032 8.70825 4.91436 8.66437 4.83622 8.58625L1.86664 5.61667C1.48582 5.22392 1.27477 4.69714 1.27906 4.1501C1.28334 3.60306 1.50263 3.07965 1.88956 2.69292V2.69375Z"
                         fill="black"
                       />
                     </svg>
                   )}

                   <div className="like-box">
                     <img className="like" src={like} alt="" />
                     <p></p>
                   </div>
                   <img className="dislike" src={dislike} alt="" />
                 </div>
               </div>
             </div>
             <Recommended />
           </section>
           <Slide />
         </>
       )}
     </>
   );
  
};

export default Detail;
