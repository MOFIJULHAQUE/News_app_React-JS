import React, { useContext  } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import "./newsArticle.css";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

//   const [filteredData, setFilteredData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const afterFilterData = posts.filter((post) => {
//         if (post.title) {
//             return post.title.includes(search);
//         }
//     })
//     setFilteredData(afterFilterData)
// }, [search]);


  return (
    <div>
      <div className="header">
        <h1 className="head__text">News Project 🗞️🗞️🗞️</h1>
        <input 
        placeholder="Search..." 
        // type="text"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}

        />
      </div>

      <div className="all__news">
        {data ? (
          data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
}

export default News;
