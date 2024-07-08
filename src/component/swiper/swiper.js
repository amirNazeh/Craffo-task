import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./swiper.css";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Main = () => {
  const swiperItems = [
    { image: image1, title: " NATIVE UNION X TOM DIXON" },
    { image: image2, title: "THE JUMP POWERPANK" },
    { image: image3, title: "SAGE COLLECTION" },
    { image: image4, title: "THE HERITAGE COLLECTION" },
    { image: image5, title: " THE MAISON KITSUNE COLORRS" },
  ];

  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleSlideChange = () => {
    setTriggerAnimation(true);
    setTimeout(() => setTriggerAnimation(false), 2500);
  };
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        onSwiper={handleSlideChange}
        onSlideChange={handleSlideChange}
      >
        {swiperItems.map((item) => (
          <SwiperSlide>
            <div className="relative h-96">
              <img
                src={item.image}
                alt="img"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: triggerAnimation ? 1 : 0,
                    y: triggerAnimation ? 0 : 50,
                  }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-5xl font-bold leading-tight custom-title text-white w-96">
                    {item.title}
                  </h1>
                  <button className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black font-bold rounded">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Main;
