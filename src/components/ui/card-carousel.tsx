"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "./badge"

interface CarouselProps {
  images: string[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = false,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 480px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }

  .swiper-pagination-bullet-active {
    background: #3D0C11 !important;
  }
  `
  return (
    <section className="w-full my-4 h-[650px] flex items-center justify-center">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] p-2 md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-[#3D0C11]/5 bg-transparent p-0 md:items-start md:gap-4 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">

          <div className="flex w-full items-center justify-center gap-4 relative z-10">
            <div className="w-full overflow-hidden scale-[1.05]">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 10,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index} className="rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                    <img
                      src={src}
                      alt={`Featured Portrait ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
