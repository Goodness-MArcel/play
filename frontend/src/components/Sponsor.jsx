import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const sponsors = [
  "/images/pic1.png",
  "/images/img1.png",
  "/images/sol.png",
    "/images/pic5.png",
  "/images/img1.png",
    "/images/img1.png",
  "/images/sol.png",
    "/images/pic1.png",
     "/images/pic5.png",
    "/images/img1.png",
  "/images/sol.png",
   "/images/pic5.png",
//   "/images/meta.png",
//   "/images/netflix.png",
];

function SponsorsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Auto scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className=" container-full py-14 overflow-hidden mx-0">
      <div className="embla" ref={emblaRef}>
        <div className="flex gap-12 items-center">

          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="flex-[0_0_auto] min-w-[140px] flex justify-center items-center"
            >
              <img
                src={logo}
                alt="Sponsor"
                className="h-30 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default SponsorsCarousel;