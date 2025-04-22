import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import NEWSBLOCK from "./NEWSBLOCK";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "./NewsBlockSwiper.css";

function NewsBlockSwiper({ newsIds = [] }) {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {newsIds.map((newsId) => (
        <SwiperSlide key={newsId}>
          <NEWSBLOCK newsId={newsId} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

NewsBlockSwiper.propTypes = {
  newsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default NewsBlockSwiper;