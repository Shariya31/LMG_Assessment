import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import image1 from '../assets/images/Coffee 1.jpg'
import image2 from '../assets/images/Coffee 2.webp'
import image3 from '../assets/images/Coffee 3.jpg'
import image4 from '../assets/images/Coffee 3.webp'
import image5 from '../assets/images/Coffee 4.jpg'
import image6 from '../assets/images/Coffee 4.webp'
import image7 from '../assets/images/Coffee 5.webp'
import image8 from '../assets/images/Coffee 6.webp'
import image9 from '../assets/images/Coffee 7.webp'
import image10 from '../assets/images/Coffee 8.webp'
import image11 from '../assets/images/Coffee.jpg'
import image12 from '../assets/images/Coffee.png'
import image13 from '../assets/images/Coffee.webp'

const Carousel = () => {
  let swiperInstance = null;

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  const images = [
   image1,
   image2,
   image3,
   image4,
   image5,
   image6,
   image7,
   image8,
   image9,
   image10,
   image11,
   image12,
   image13,
  ];

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <>
      <div className="px-4 py-8 mx-auto container0">
        <h2 className="text-3xl font-bold text-gray-950">Take your stuff here</h2>
        <div className="flex flex-col px-4 mb-12 md:flex-row gap-7"></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperInstance = swiper;
          }}
          className="swiper_container h-[400px]"
          breakpoints={breakpoints}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative flex items-center justify-center w-full h-full m-auto rounded-lg group bg-gradient-to-b from-slate-400 to-zinc-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={image}
                  alt={`slide_image_${index + 1}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-full w-full flex-grow basis-[200] rounded-lg object-cover object-center mix-blend-overlay opacity-70"
                />
                <div
                  className="absolute left-0 z-30 flex flex-col items-center justify-center w-full pl-3 pr-3 overflow-hidden text-2xl text-center duration-500 ease-in-out opacity-0 text-slate-50 group-hover:opacity-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <button className="w-auto p-2 text-lg font-semibold tracking-wider text-white bg-black border border-black rounded-full lg:px-4">
                    Find Out More
                  </button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
