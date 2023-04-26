import { useEffect, useState } from "react";
import axios from 'axios';
const NewsFeed = () => {
  const [articles, setArticles] = useState(null)
  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data);
    }).catch((error) => {
      console.error(error);
    })
  }, [])

  const firstArticles = articles?.slice(0, 9);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {firstArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}><p>{article.title}</p></a>
        </div>))}
    </div>
  );
}

export default NewsFeed;
