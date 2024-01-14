import "swiper/css";

import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RichText from "@/components/RichText/RichText";
import SiteIcon from "@/components/SiteIcon/SiteIcon";
import SiteImage from "@/components/SiteImage/SiteImage";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

// TODO: WIP

Swiper.use([FreeMode, Thumbs]);

interface Slide {
  bgImage?: any;
  year?: string;
  content?: any[];
}

interface SiteSliderProps {
  title: string;
  subtitle: string;
  slides: Slide[];
}

const SiteSlider: React.FC<any> = ({ title, subtitle, slides }) => {
  const containerRef = useRef<any | null>(null);
  const thumbsContainerRef = useRef<any | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const swiper = new Swiper(containerRef.current, {
      thumbs: {
        swiper: new Swiper(thumbsContainerRef.current, {
          slidesPerView: 4.5,
          slideToClickedSlide: true,
          spaceBetween: 8,
          freeMode: true,
          watchSlidesProgress: true,
        }),
      },
      on: {
        slideChange: () => {
          setCurrentSlide(swiper.realIndex);
        },
      },
    });
  }, []);

  const goToNextSlide = () => {
    if (containerRef.current) {
      containerRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (containerRef.current) {
      containerRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="block">
      {title || subtitle ? (
        <div className="gh-container mb-6 block max-w-8xl space-y-6">
          {title && (
            <h2 className={`${subtitle ? "mb-2" : "mb-0"}`}>{title}</h2>
          )}
          {subtitle && (
            <span className="bg-red-700 p-1 text-white lg:text-xl">
              {subtitle}
            </span>
          )}
        </div>
      ) : null}

      <div
        ref={containerRef}
        className="swiper relative overflow-hidden bg-black"
      >
        <div className="swiper-wrapper">
          {slides.map((slide: any, index: number) => {
            const key = `slide-${index}`;

            return (
              <div className="swiper-slide" key={key}>
                <figure className="aspect-h-4 aspect-w-3 relative bg-black pt-32 lg:aspect-h-7 lg:aspect-w-16 lg:pt-0">
                  {slide.image && (
                    <>
                      <SiteImage
                        image={slide.image}
                        classes="object-contain z-[2] inset-0 pointer-events-none"
                        objectFit="contain"
                        blurUrl={slide.image.lqip}
                        alt=""
                      />
                      <SiteImage
                        image={slide.image}
                        classes="hidden object-cover z-[1] opacity-30 blur-md inset-0 pointer-events-none lg:block"
                        objectFit="cover"
                        blurUrl={slide.image.lqip}
                        alt=""
                      />
                    </>
                  )}

                  <figcaption className="z-30 flex items-center lg:items-end">
                    <div className="gh-container max-w-8xl text-white">
                      <div className="lg:max-w-5xl">
                        {slide.content && (
                          <RichText
                            theme="dark"
                            content={slide.description}
                            classes="prose-p:text-lg prose-p:lg:text-xl lg:mb-12"
                          />
                        )}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>

        {/* Previous and Next buttons */}
        {slides.length > 1 && (
          <div className="gh-container relative z-40 max-w-8xl">
            <nav className="absolute -top-20 right-0 hidden w-40 items-center gap-x-8 pr-8 md:flex">
              <button
                type="button"
                className={`flex items-center justify-center rounded-full bg-transparent shadow-lg transition hover:text-slate-600 ${
                  currentSlide === 0
                    ? "pointer-events-none text-gray-100/30"
                    : "text-white"
                }`}
                onClick={goToPrevSlide}
                aria-label="Go to previous slide"
              >
                <span className="sr-only">Go to previous slide</span>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="h-12 w-12"
                />
              </button>
              <button
                type="button"
                className={`flex items-center justify-center rounded-full bg-transparent shadow-lg transition hover:text-slate-600 ${
                  currentSlide === slides.length - 1
                    ? "pointer-events-none text-gray-100/30"
                    : "text-white"
                }`}
                onClick={goToNextSlide}
                aria-label="Go to next slide"
              >
                <span className="sr-only">Go to next slide</span>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="h-12 w-12"
                />
              </button>
            </nav>
          </div>
        )}

        {/* Thumbs */}
        <div
          className="swiper-thumbs z-20 w-full bg-black py-2"
          ref={thumbsContainerRef}
        >
          <div className="swiper-wrapper [&>.swiper-slide.swiper-slide-thumb-active]:opacity-100 [&>.swiper-slide]:opacity-30">
            {slides.map((slide: any, index: number) => {
              const key = `thumb-${index}`;

              return (
                <div
                  className="swiper-slide aspect-h-1 aspect-w-10 relative"
                  key={key}
                >
                  {slide.year && (
                    <span className="bottom-[initial] left-1 right-[initial] top-1 z-[3] mb-2 block h-auto w-auto bg-black px-1 text-sm text-white lg:left-2 lg:top-4 lg:px-2 lg:py-1">
                      {slide.year}
                    </span>
                  )}
                  {slide.image && (
                    <SiteImage
                      image={slide.image}
                      classes="object-cover z-[2] w-full h-full pointer-events-none"
                      objectFit="cover"
                      blurUrl={slide.image.lqip}
                      alt=""
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSlider;
