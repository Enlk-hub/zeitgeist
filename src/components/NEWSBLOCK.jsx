import PropTypes from "prop-types";
import { useNews } from "../service/NewsContext";
import "./NEWSBLOCK.css";

function NEWSBLOCK({ className = "", newsId }) {
  const { getNewsById } = useNews();
  const newsItem = getNewsById(newsId);

  if (!newsItem) return null;

  return (
    <div className={`news-block ${className}`}>
      <h2 className="news1">
        {newsItem.category}
      </h2>

      <div className="news-line2" />
      <h1 className="titels1">
        {newsItem.title}
      </h1>

      <h3 className="description">
        {newsItem.description}
      </h3>

      <b className="author">
        BY {newsItem.author}
      </b>
    </div>
  );
}

NEWSBLOCK.propTypes = {
  className: PropTypes.string,
  newsId: PropTypes.number.isRequired,
};

export default NEWSBLOCK;