import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import './style/nftCarousel.css';

function NFTCarousel() {
  return (
    <section className="nft-section">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={15}
        slidesPerView={3}           // Show 3 cards on mobile
        speed={900}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 80,
          modifier: 1.2,
          slideShadows: false,
          scale: 0.92,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 12,
            coverflowEffect: { depth: 60, scale: 0.88 },
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
            coverflowEffect: { depth: 100, scale: 0.85 },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            coverflowEffect: { depth: 120, scale: 0.82 },
          },
        }}
        className="nft-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="nft-slide">
            <div 
              className="nft-card"
              style={{ "--accent": card.accent }}
            >
              <div className="nft-image-wrapper">
                <img src={card.image} alt={card.title} />
                <div className="nft-overlay" />
              </div>

              <div className="nft-content">
                <div className="nft-top">
                  <div>
                    <h3>{card.title}</h3>
                    <p>by {card.creator}</p>
                  </div>
                  <div className="nft-price">{card.price}</div>
                </div>

                <div className="nft-bottom">
                  ❤️ {card.likes}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}