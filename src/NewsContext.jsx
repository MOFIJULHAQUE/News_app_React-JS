import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
//   const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";    //87d572c69e764c5fb5f860b97a259986

  useEffect(() => {
    axios
      .get(
        // "https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=87d572c69e764c5fb5f860b97a259986"
        "https://saurav.tech/NewsAPI/everything/cnn.json"
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    

    <NewsContext.Provider value={{ data }}>
      {props.children}

    </NewsContext.Provider>
    </>
  );
};