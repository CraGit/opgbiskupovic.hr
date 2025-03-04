"use client";

import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function Hero({ heading, slider }) {
  const swiperRef = useRef(null);

  return (
    <div className="hiro-sec relative -top-0 pt-24 pb-0 lg:h-screen bg-white h-full">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-2xl lg:text-5xl lg:leading-normal max-lg:text-center text-s_black font-normal tracking-wide font-prata mb-12 max-w-3xl lg:max-w-full mx-auto">
          {heading}
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mySwiper relative bottom-5 h-full"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <PrismicNextImage
              field={item.image}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full max-w-6xl px-4 mx-auto relative">
        <div className="md:absolute bottom-2 right-0 z-[100] bg-white h-24 mx-auto md:mr-0 self-end w-full md:w-[370px] lg:w-[470px] xl:w-[580px]">
          <div className="flex w-full items-center justify-between pt-7 px-4 lg:px-10 pb-7">
            <div className="flex gap-x-5 w-full">
              <svg
                className="swiper-button-prev stroke-slate-800 cursor-pointer transition-all duration-500 hover:stroke-s_skin opacity-100"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.2"
                  cx="20"
                  cy="20"
                  r="19.5"
                  transform="matrix(-1 0 0 1 40 0)"
                  fill="white"
                  stroke="currentColor"
                />
                <path
                  d="M22.25 24.5L17.75 20L22.25 15.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="swiper-button-next stroke-slate-800 cursor-pointer transition-all duration-500 hover:stroke-s_skin"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.2"
                  cx="20"
                  cy="20"
                  r="19.5"
                  fill="white"
                  stroke="currentColor"
                />
                <path
                  d="M17.75 24.5L22.25 20L17.75 15.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex gap-x-5">
              <button className="w-10 h-10 flex items-center text-gray-900 justify-center rounded-full border border-gray-300 transition-all duration-500 hover:text-s_skin hover:border-s_skin">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9316 10.1834L13.2741 8.03988H11.1647V6.64657C11.1647 6.06044 11.4592 5.4877 12.4009 5.4877H13.3734V3.66233C12.807 3.57335 12.2348 3.52522 11.6612 3.51831C9.92509 3.51831 8.79164 4.54655 8.79164 6.40541V8.03988H6.86719V10.1834H8.79164V15.3682H11.1647V10.1834H12.9316Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>

              <button className="w-10 h-10 flex items-center text-gray-900 justify-center rounded-full border border-gray-300 transition-all duration-500 hover:text-s_skin hover:border-s_skin">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2959 8.50907L16.1139 3.02905H14.9722L10.7888 7.78728L7.44751 3.02905H3.59375L8.6464 10.2243L3.59375 15.971H4.73551L9.15329 10.9461L12.6819 15.971H16.5357L11.2957 8.50907H11.2959ZM9.73216 10.2877L9.22022 9.57124L5.1469 3.87007H6.90057L10.1878 8.47109L10.6997 9.18758L14.9727 15.1682H13.219L9.73216 10.288V10.2877Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>

              <button className="w-10 h-10 flex items-center text-gray-900 justify-center rounded-full border border-gray-300 transition-all duration-500 hover:text-s_skin hover:border-s_skin">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.9324 9.44337C7.9324 8.25215 8.912 7.28621 10.1207 7.28621C11.3295 7.28621 12.3096 8.25215 12.3096 9.44337C12.3096 10.6346 11.3295 11.6005 10.1207 11.6005C8.912 11.6005 7.9324 10.6346 7.9324 9.44337ZM6.74914 9.44337C6.74914 11.2785 8.2586 12.7661 10.1207 12.7661C11.9829 12.7661 13.4923 11.2785 13.4923 9.44337C13.4923 7.60821 11.9829 6.12061 10.1207 6.12061C8.2586 6.12061 6.74914 7.60821 6.74914 9.44337ZM12.8379 5.98886C12.8378 6.14244 12.8839 6.29259 12.9705 6.42032C13.057 6.54806 13.18 6.64763 13.324 6.70646C13.4679 6.76529 13.6263 6.78073 13.7792 6.75083C13.932 6.72093 14.0725 6.64703 14.1827 6.53847C14.2929 6.42992 14.368 6.29159 14.3985 6.14097C14.429 5.99035 14.4134 5.83421 14.3538 5.6923C14.2943 5.55039 14.1933 5.42907 14.0638 5.3437C13.9342 5.25832 13.7819 5.21272 13.6261 5.21266H13.6258C13.4169 5.21275 13.2166 5.29455 13.0689 5.44009C12.9211 5.58563 12.838 5.783 12.8379 5.98886V5.98886ZM7.46805 14.7106C6.82788 14.6818 6.47994 14.5768 6.24871 14.488C5.94215 14.3704 5.72342 14.2303 5.49345 14.0039C5.26349 13.7776 5.12113 13.5623 5.00231 13.2602C4.91218 13.0324 4.80554 12.6894 4.77644 12.0585C4.74461 11.3764 4.73826 11.1715 4.73826 9.44342C4.73826 7.71537 4.74514 7.51104 4.77644 6.82838C4.8056 6.19749 4.91302 5.85515 5.00231 5.6267C5.12166 5.32458 5.2638 5.10902 5.49345 4.88238C5.72311 4.65574 5.94163 4.51545 6.24871 4.39835C6.47983 4.30952 6.82788 4.20443 7.46805 4.17575C8.16016 4.14438 8.36807 4.13812 10.1207 4.13812C11.8734 4.13812 12.0815 4.1449 12.7742 4.17575C13.4144 4.20448 13.7617 4.31035 13.9935 4.39835C14.3001 4.51545 14.5188 4.65605 14.7488 4.88238C14.9788 5.10871 15.1206 5.32458 15.2399 5.6267C15.3301 5.85447 15.4367 6.19749 15.4658 6.82838C15.4976 7.51104 15.504 7.71537 15.504 9.44342C15.504 11.1715 15.4976 11.3758 15.4658 12.0585C15.4366 12.6894 15.3295 13.0323 15.2399 13.2602C15.1206 13.5623 14.9784 13.7778 14.7488 14.0039C14.5191 14.2301 14.3001 14.3704 13.9935 14.488C13.7624 14.5768 13.4144 14.6819 12.7742 14.7106C12.0821 14.7419 11.8742 14.7482 10.1212 14.7482C8.33812 14.7482 8.11414 14.7419 7.46805 14.7106V14.7106ZM7.41368 3.0116C6.71468 3.04297 6.23704 3.1522 5.81992 3.31216C5.38792 3.47735 5.02222 3.69897 4.65678 4.05855C4.29134 4.41813 4.06705 4.7791 3.89943 5.20484C3.73712 5.61619 3.62628 6.08665 3.59445 6.77552C3.56209 7.46548 3.55469 7.68607 3.55469 9.44337C3.55469 11.2007 3.56209 11.4213 3.59445 12.1112C3.62628 12.8001 3.73712 13.2706 3.89943 13.6819C4.06705 14.1074 4.2914 14.4688 4.65678 14.8282C5.02217 15.1876 5.38792 15.4089 5.81992 15.5746C6.23783 15.7345 6.71468 15.8438 7.41368 15.8751C8.11414 15.9065 8.3376 15.9143 10.1207 15.9143C11.9038 15.9143 12.1277 15.907 12.8278 15.8751C13.5268 15.8438 14.0041 15.7345 14.4215 15.5746C14.8533 15.4089 15.2192 15.1878 15.5847 14.8282C15.9501 14.4686 16.1739 14.1074 16.342 13.6819C16.5043 13.2706 16.6157 12.8001 16.647 12.1112C16.6788 11.4207 16.6862 11.2007 16.6862 9.44337C16.6862 7.68607 16.6788 7.46548 16.647 6.77552C16.6152 6.0866 16.5043 5.61593 16.342 5.20484C16.1739 4.77936 15.9495 4.4187 15.5847 4.05855C15.2198 3.6984 14.8533 3.47735 14.4221 3.31216C14.0041 3.1522 13.5268 3.04245 12.8283 3.0116C12.1282 2.98023 11.9044 2.97241 10.1212 2.97241C8.33812 2.97241 8.11414 2.97971 7.41368 3.0116Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
