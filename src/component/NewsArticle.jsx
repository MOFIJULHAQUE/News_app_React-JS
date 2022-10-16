import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">

      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
<div className="like-dislike-comment">
<i class="fa-regular fa-thumbs-up"></i>
<i class="fa-regular fa-thumbs-down"></i>
<i class="fa-regular fa-comment"></i>
</div>
    </div>
  );
}

export default NewsArticle;