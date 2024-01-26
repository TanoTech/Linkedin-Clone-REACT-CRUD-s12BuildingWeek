import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../redux/contexts/ProfileContext";
import { Container } from "react-bootstrap";

const LinkedinNews = () => {
  const { fetchNews } = useContext(ProfileContext);
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        if (newsData && newsData.results) {
          const shuffled = [...newsData.results].sort(
            () => 0.5 - Math.random()
          );
          setNewsItems(shuffled.slice(0, 5));
        } else {
          console.error(
            "Il fetch delle notizie non ha restituito i dati attesi:",
            newsData
          );
        }
      } catch (error) {
        console.error(
          "Si è verificato un errore durante il recupero delle notizie:",
          error
        );
      }
    };

    getNews();
  }, [fetchNews]);

  return (
    <Container className="bg-white rounded border border-solid mt-2 SideSections p-0">
      <div className="d-flex mt-3 mx-3">
        <h2 className="fs-4 align-self-center ms-2 m-0">LinkedIn News</h2>
      </div>
      {newsItems.map((news, index) => (
        <ul key={index} className="d-flex border-bottom p-4">
          <li>
            <h3
              id="TitoloNews"
              className="fs-6 m-0 overflow-hidden"
              style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}
            >
              {news.title}
            </h3>
            <p className="fs-6 m-0">{news.news_site}</p>
          </li>
        </ul>
      ))}
      <Container className="text-secondary fs-6 py-2 pl-4 text-left ButtonSideSections">
        Show More
        <i class="bi bi-caret-down-fill"></i>
      </Container>
    </Container>
  );
};

export default LinkedinNews;
