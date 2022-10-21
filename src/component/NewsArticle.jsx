import React, { useState } from "react";
import "./newsArticle.css";
function NewsArticle({ data }) {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <>
      <div className="content">
        <div className="news">
          <img src={data.urlToImage} alt="img" />
          <h1 className="news__title">{data.title}</h1>
          <p className="news__desc">{data.description}</p>
          <span className="news__author">{data.author}</span> <br />
          <span className="news__published">{data.publishedAt}</span>

          <div className="like-dislike-comment">
            
              <div className="btn-container">
                <button
                  className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
                  onClick={handleLikeClick}
                >
                  <span className="material-symbols-rounded"></span>
                  <i class="fa-regular fa-thumbs-up"></i> {likeCount}
                </button>

                <button
                  className={`btn ${
                    activeBtn === "dislike" ? "dislike-active" : ""
                  }`}
                  onClick={handleDisikeClick}
                >
                  <span className="material-symbols-rounded"></span>
                  <i class="fa-regular fa-thumbs-down"></i> {dislikeCount}
                </button>
              </div>
            </div>
            
          </div>
        </div>
    </>
  );
}

export default NewsArticle;
