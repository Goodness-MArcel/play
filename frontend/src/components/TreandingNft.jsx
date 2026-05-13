import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import './style/nftCarousel.css'

const cards = [
  {
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=1000",
    title: "Digital Decade",
    creator: "Anthony Gargasz",
    likes: "50K",
    price: "2.45 ETH",
    accent: "#00f5ff",   // cyan
  },
  {
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1000",
    title: "Winter Jamz",
    creator: "Antoi Tudisco",
    likes: "47K",
    price: "2.31 ETH",
    accent: "#ff2e9f",   // pink
  },
  {
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000",
    title: "Pastel Wifey",
    creator: "Jake Kythyn",
    likes: "44K",
    price: "1.92 ETH",
    accent: "#a855f7",   // purple
  },
  {
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f9?q=80&w=1000",
    title: "Versace",
    creator: "Antoi Tudisco",
    likes: "48K",
    price: "2.45 ETH",
    accent: "#eab308",   // yellow
  },
  {
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1000",
    title: "Cyber Punk",
    creator: "Costa",
    likes: "39K",
    price: "1.95 ETH",
    accent: "#22d3ee",   // teal
  },
  {
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000",
    title: "Pastel Wifey",
    creator: "Jake Kythyn",
    likes: "44K",
    price: "1.92 ETH",
    accent: "#a855f7",   // purple
  },
  {
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f9?q=80&w=1000",
    title: "Versace",
    creator: "Antoi Tudisco",
    likes: "48K",
    price: "2.45 ETH",
    accent: "#eab308",   // yellow
  },
  {
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1000",
    title: "Cyber Punk",
    creator: "Costa",
    likes: "39K",
    price: "1.95 ETH",
    accent: "#22d3ee",   // teal
  },
];

function NFTCarousel() {
  return (
    <section className="nft-section">
      {/* No background added as requested */}

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={50}
        slidesPerView="auto"
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
        //   stretch: 180,
        //   depth: 300,
        //   modifier: 2.4,
          slideShadows: true,
          scale: 0.82,
        }}
        className="nft-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="nft-slide">
            <div 
              className="nft-card"
              style={{
                "--accent": card.accent,
              }}
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
                  <span>❤️ {card.likes}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NFTCarousel;