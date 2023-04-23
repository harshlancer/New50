import React from "react";
import ChartsCard from "./ChartsCard";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import "../App.css";
function Home() {
  const API_KEY = "Y431ITMYNB45WYH9";
  const SYMBOL = "AAPL";
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="right-content">
      {data && (
        <ChartsCard
          thumbnail={Chart}
          title={data && data["Global Quote"]["01. symbol"]}
          description={data && data["Global Quote"]["09. change"]}
          currentPrice={data && data["Global Quote"]["05. price"]}
          openPrice={data && data["Global Quote"]["02. open"]}
          previousClose={data && data["Global Quote"]["08. previous close"]}
        />
      )}
    </div>
  );
}

export default Home;
