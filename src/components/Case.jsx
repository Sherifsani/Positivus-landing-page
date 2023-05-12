import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Case() {
  return (
    <section className="case p-4">
      <div className="case-head flex items-center flex-col gap-2">
        <h2 className="text-lg font-semibold bg-[#b9ff66]">Case Studies</h2>
        <p className="text-center text-sm">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="case-slider-mobile md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card flex flex-col bg-black p-7 justify-between">
              <div className="para text-white">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </div>
              <div className="bottom flex gap-2 items-center">
                <span className="text-[#b9ff66]">Learn More</span>
                <img src="./public/images/services/arrow-dark.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card flex flex-col bg-black p-7 justify-between">
              <div className="para text-white">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </div>
              <div className="bottom flex gap-2 items-center">
                <span className="text-[#b9ff66]">Learn More</span>
                <img src="./public/images/services/arrow-dark.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card flex flex-col bg-black p-7 justify-between">
              <div className="para text-white">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </div>
              <div className="bottom flex gap-2 items-center">
                <span className="text-[#b9ff66]">Learn More</span>
                <img src="./public/images/services/arrow-dark.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="case-cards w-full p-4 hidden md:flex ">

      </div>
    </section>
  );
}
