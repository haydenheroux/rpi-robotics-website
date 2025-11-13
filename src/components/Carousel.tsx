import { useEffect, useRef, useState } from "react";

function Carousel({ images }: { images: string[] }) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;

    const autoScroll = () => {
      if (isPaused) return;
      const slideWidth = carousel.offsetWidth / 3;
      scrollAmount += slideWidth;

      if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
        scrollAmount = 0;
      }

      carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {images.map((image, i) => (
            <div key={i} className="flex-shrink-0 w-1/3 snap-center px-1">
              <div className="aspect-[6/8] overflow-hidden">
                <img src={image} className="w-full h-full object-contain object-center" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
