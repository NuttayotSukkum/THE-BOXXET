import { Constants, Translations } from "../constants/Constants";
import ipsos from "../../assets/page/Ipsos.png";
import niq from "../../assets/page/niq.png";
import central from "../../assets/page/central.png";
import theMall from "../../assets/page/the-mall.png";
import customeAsia from "../../assets/page/customasia.png";
import theBoxxetIcon from "../../assets/logo/the-boxext.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LineIcon from "../../assets/page/lineIcon.png";
import FooterImg from "../../assets/page/footerimg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";
import { ServiceData } from "../../component/constants/index.js";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import aboutUsbuttom from "../../assets/page/about-ous-buttom.png";
import aboutUsbuttomright from "../../assets/page/about-ous-right.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import {BoothSystem} from "../constants/Booth-System-index.js"
import { BoothData } from "../constants/Booth-System-index-v1.ts";
import TheBoxxetMailImg from "../../assets/logo/the-boxxet-send-enmail-logo.jpeg";

// css
import "swiper/swiper-bundle.css";
import React, { useEffect, useRef, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { GalleryImg } from "../../component/constants/gallery-index.ts";
import { FaLine } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FacebookPagePlugin } from "../utils/ComponentsUtil.tsx";

interface SessionProps {
  id: string;
  language: string;
  pic: string;
  landing: string;
}

export const Session: React.FC<SessionProps> = ({
  id,
  language,
  pic,
  landing,
}) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    //   <section
    //   id={id}
    //   className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full  text-center md:text-left py-9 "
    // >
    //   {/* ส่วนซ้าย: รูป + Title */}
    //   <div className="flex flex-col justify-center items-center px-6 ">
    //     <div className="w-full xl:w-[500px] ">
    //       <h1 className="font-bold border-b-4 border-black inline-block px-4" style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}>
    //         {translations[language].about}
    //       </h1>
    //     </div>

    //     <div className="flex justify-center max-w-[500px] mt-4">
    //       <img
    //         src={pic}
    //         alt={landing}
    //         className="w-full h-auto object-cover rounded-xl shadow-lg"
    //       />
    //     </div>
    //   </div>

    //   {/* ส่วนขวา: ข้อความ + ปุ่ม */}
    //   <div className=" flex flex-col justify-center items-center px-6">
    //     <h1 className="sm:text-xs md:text-xl lg:text-3xl 2xl:text-4xl font-bold">
    //       {translations[language].contractUsMainTitle}
    //     </h1>
    //     <h2 className="sm:text-xs md:text-xl lg:text-2xl 2xl:text-3xl mt-2">
    //       {translations[language].contractUsSubTitle}
    //     </h2>
    //     <p className="text-gray-600 mt-6 text-pretty whitespace-normal indent-6 leading-relaxed">
    //       {translations[language].contractUsdescription}
    //     </p>
    //     <Link
    //       to="/contact"
    //       className="text-center w-full bg-customBlue text-customYellow py-3 px-6 rounded-lg hover:bg-customYellow hover:text-customBlue transition-all mt-6 text-[clamp(1rem, 2vw, 1.25rem)]"
    //     >
    //       {translations[language].contactUs}
    //     </Link>
    //   </div>
    // </section>
    <>
      <div className="mx-4 mb-5 sm:px-[7vw] sm:mb-10">
        <h1
          className="font-bold border-b-4 border-black inline-block px-4 mt-5"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].about}
        </h1>
        <section id={id}>
          <div className="w-full mt-5">
            <div className="w-full flex flex-col xl:flex-row gap-8 ">
              <div className="w-full ">
                <img
                  src={pic}
                  alt={landing}
                  className="sm:w-[80%] sm:h-[100%] object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full flex flex-col h-auto mt-4 xl:mt-0  ">
                <h1 className="sm:text-xs md:text-xl lg:text-3xl 2xl:text-4xl font-bold text-center">
                  {translations[language].contractUsMainTitle}
                </h1>
                <h2 className="sm:text-xs md:text-xl lg:text-2xl 2xl:text-3xl mt-2 text-center">
                  {translations[language].contractUsSubTitle}
                </h2>
                <p className="text-gray-600 mt-6 text-pretty whitespace-normal indent-8 leading-relaxed">
                  {translations[language].contractUsdescription}
                </p>
                <Link
                  to="/contact"
                  className="text-center w-full bg-customBlue text-customYellow py-3 px-6 rounded-lg hover:bg-customYellow hover:text-customBlue transition-all mt-6 text-[clamp(1rem, 2vw, 1.25rem)]"
                >
                  {translations[language].contactUs}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

interface OurProjectProps {
  id: string;
  language: string;
  pic: string;
}

export const OurProject: React.FC<OurProjectProps> = ({
  id,
  language,
  pic,
}) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section id={id} className={`w-full h-auto`}>
      <div
        className="w-full h-full grid place-items-center"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* เนื้อหา */}
        <div className="z-10 flex flex-col items-center text-center w-full max-w-3xl px-6 py-20">
          <h1
            className="text-customYellow font-bold"
            style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
          >
            {translations[language].ourProject}
          </h1>
          <p className="text-white mt-4 text-base md:text-lg lg:text-xl">
            {translations[language].ourProjectDesp}
          </p>
          <Link
            to="/gallery-page"
            className="mt-6 bg-customYellow text-customBlue py-3 px-6 rounded-lg hover:bg-customBlue hover:text-customYellow transition-all text-lg md:text-xl"
          >
            {translations[language].gallery}
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CustomerProps {
  id: string;
  language: string;
}

export const CustomerSection: React.FC<CustomerProps> = ({ id, language }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section
      id={id}
      className="w-full h-auto flex justify-center items-center mt-8 px-4 pt-20 pb-10"
    >
      <div className="text-center w-full max-w-8xl">
        <h1
          className="font-semibold"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].customers}
        </h1>
        <div className="flex flex-wrap justify-center items-center mt-6 gap-16">
          <img
            src={ipsos}
            alt="Ipsos"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={niq}
            alt="NIQ"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={central}
            alt="Central"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={theMall}
            alt="The Mall"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <img
            src={customeAsia}
            alt="Custom Asia"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceProps {
  id: string;
  language: string;
  img: string;
}

export const ServiceSection: React.FC<ServiceProps> = ({
  id,
  language,
  img,
}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  const [hideNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // ถ้าจอเล็กกว่า 1024px ถือว่าเป็น Mobile
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (img) {
    return (
      <div id={id} className="relative w-full h-auto pb-20">
        <div>
          <img
            src={img}
            alt="Styled"
            className="absolute w-full h-full object-cover filter brightness-50 contrast-150 pb-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#09283C] opacity-50"></div>
          <div className="flex flex-col px-[7vw] py-[1vw]">
            <div>
              <h1
                className="relative font-bold text-white border-b-4 border-yellow-500 inline-block px-4 mt-8"
                style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
              >
                {translations[language].serviceSection}
              </h1>
            </div>
            <div>
              <p className="relative mt-6 text-customYellow text-lg md:text-xl">
                {translations[language].serviceSectionDesc}
              </p>
            </div>
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between w-full mt-6">
              {/* ปุ่ม Prev (ซ่อนเมื่อมี 1 Slide) */}
              {!hideNav && !isMobile && (
                <button className="swiper-button-prev-custom text-customYellow hover:text-blue-400 flex-shrink-0">
                  <ExpandCircleDownOutlinedIcon
                    fontSize="large"
                    className="rotate-90"
                  />
                </button>
              )}

              {/* Swiper */}
              <div className="flex-grow max-w-screen-lg w-full">
                <Swiper
                  breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
                    700: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 16,
                    },
                  }}
                  freeMode={true}
                  pagination={{ clickable: true }}
                  navigation={{
                    prevEl: hideNav ? null : ".swiper-button-prev-custom",
                    nextEl: hideNav ? null : ".swiper-button-next-custom",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation, FreeMode, Autoplay]}
                  className="max-w-full"
                >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                      <Link to={item.link}>
                        <div className="flex-col gap-6 mb-8 group shadow-lg rounded-xl h-[360px] w-[320px] min-h-70 min-w-72 overflow-hidden cursor-pointer">
                          <div
                            className="absolute flex flex-col inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${item.backgroundImage})`,
                            }}
                          />
                          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                          <div className="relative flex gap-3">
                            <div className="absolute left-1/2 top-80 transform -translate-x-1/2 -translate-y-1/2 w-full text-center transition-all duration-500 group-hover:top-10">
                              <h1 className="text-xl lg:text-2xl font-bold text-customYellow">
                                {item.title}
                              </h1>
                            </div>
                            {item.bullets && item.bullets.length > 0 && (
                              <div className="absolute left-1/2 top-[110%] transform -translate-x-1/2 w-[80%] text-left opacity-0 transition-all duration-500 group-hover:top-20 group-hover:opacity-100">
                                <ul className="relative list-disc list-inside text-white text-sm lg:text-lg space-y-1">
                                  {item.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ปุ่ม Next (ซ่อนเมื่อมี 1 Slide) */}
              {!hideNav && !isMobile && (
                <button className="swiper-button-next-custom text-customYellow hover:text-blue-400 flex-shrink-0">
                  <ExpandCircleDownOutlinedIcon
                    fontSize="large"
                    className="-rotate-90"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div id={id} className="relative w-full  mt-8 h-auto pb-20">
        <div>
          <div className="flex flex-col px-[7vw] py-[1vw] justify-start items-center">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between w-full mt-6">
              {/* ปุ่ม Prev (ซ่อนเมื่อมี 1 Slide) */}
              {!hideNav && !isMobile && (
                <button className="swiper-button-prev-custom text-customYellow hover:text-blue-400 flex-shrink-0">
                  <ExpandCircleDownOutlinedIcon
                    fontSize="large"
                    className="rotate-90"
                  />
                </button>
              )}

              {/* Swiper */}
              <div className="flex-grow max-w-screen-lg w-full">
                <Swiper
                  breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },
                    700: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 8,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 16,
                    },
                  }}
                  freeMode={true}
                  pagination={{ clickable: true }}
                  navigation={{
                    prevEl: hideNav ? null : ".swiper-button-prev-custom",
                    nextEl: hideNav ? null : ".swiper-button-next-custom",
                  }}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Navigation, FreeMode, Autoplay]}
                  className="max-w-full"
                >
                  {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                      <Link to={item.link}>
                        <div className="flex-col gap-6 mb-8 group shadow-lg rounded-xl h-[360px] w-[320px] min-h-70 min-w-72 overflow-hidden cursor-pointer">
                          <div
                            className="absolute flex flex-col inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${item.backgroundImage})`,
                            }}
                          />
                          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                          <div className="relative flex gap-3">
                            <div className="absolute left-1/2 top-80 transform -translate-x-1/2 -translate-y-1/2 w-full text-center transition-all duration-500 group-hover:top-10">
                              <h1 className="text-xl lg:text-2xl font-bold text-customYellow">
                                {item.title}
                              </h1>
                            </div>
                            {item.bullets && item.bullets.length > 0 && (
                              <div className="absolute left-1/2 top-[110%] transform -translate-x-1/2 w-[80%] text-left opacity-0 transition-all duration-500 group-hover:top-20 group-hover:opacity-100">
                                <ul className="relative list-disc list-inside text-white text-sm lg:text-lg space-y-1">
                                  {item.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ปุ่ม Next (ซ่อนเมื่อมี 1 Slide) */}
              {!hideNav && !isMobile && (
                <button className="swiper-button-next-custom text-customYellow hover:text-blue-400 flex-shrink-0">
                  <ExpandCircleDownOutlinedIcon
                    fontSize="large"
                    className="-rotate-90"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export const FooterSection: React.FC<CustomerProps> = ({ id, language }) => {
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <footer
      id={id}
      className="relative w-full text-white py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      {/* คอนเทนต์ที่แสดงข้อความ */}
      <div className="relative container mx-auto px-4 self-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white justify-center items-center">
          {/* โลโก้ */}
          <div className="flex justify-center md:justify-start">
            <img
              src={theBoxxetIcon}
              alt="Logo"
              className="w-[164px] h-[187px] sm:w-[140px] sm:h-[160px] md:w-[150px] md:h-[170px] lg:w-[164px] lg:h-[187px]"
            />
          </div>

          {/* รายการบริการ */}
          <div>
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              {translations[language].service}
            </h1>
            <ul className="mt-4 space-y-2">
              <li>Booth System</li>
              <li>Booth Set</li>
              <li>Element Design</li>
              <li>Event Rental</li>
              <li>Activity</li>
            </ul>
          </div>

          {/* Facebook */}
          <div className="mt-12">
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              FaceBook
            </h1>
            <div className="mt-4">
              <FacebookPagePlugin />
            </div>
          </div>

          {/* ติดต่อเรา */}
          <div className="mt-14">
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              {translations[language].contactUs}
            </h1>
            <div className="space-y-3 mt-2">
              <div className="flex items-center gap-2">
                <MailOutlineIcon />
                <span>theboxxet.contact@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <CallOutlinedIcon />
                <span>095-956-5419, 064-265-9428</span>
              </div>
              <div className="flex items-start gap-2">
                <PlaceOutlinedIcon />
                <a
                  href="https://www.google.com/maps/dir//The+Villa+Ramintra+14+134+The+Villa+%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B2-%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%99+Tha+Raeng,+Bang+Khen,+Bangkok+10220/@13.8594214,100.6666058,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x311d63299f994771:0xe8a631c6d650331d!2m2!1d100.6666024!2d13.8594292?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                  className="w-[238px]"
                >
                  The Villa Ramindra 14, 134 The Villa Ramindra Bang Khen Tha
                  Raeng, Bang Khen, Bangkok 10220
                </a>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="ml-8">
            <h1 className="text-2xl relative after:content-[''] after:block after:w-12 after:h-1 after:bg-yellow-500 after:mt-2">
              QR Line OA
            </h1>
            <div className="mt-4">
              <img
                src={LineIcon}
                alt="Line QR"
                className="w-[123px] h-[124px]"
              />
            </div>
          </div>
        </div>

        {/* ลิขสิทธิ์ */}
        <h1 className="mt-8 text-center text-customeWhite">
          © 2025 THE BOXXET. Ltd. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

interface AboutUsProps {
  id: string;
  language: string;
  img: string;
}

export const AboutSection1: React.FC<AboutUsProps> = ({ language, img }) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div className="w-full h-[30vh]">
      <div
        className="px-[7vw] py-[1vw] w-full h-[30vh]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="relative font-bold text-white border-b-4 border-yellow-500 inline-block mt-8"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].aboutImpl}
        </h1>
      </div>
    </div>
  );
};

export const GallerySection: React.FC<AboutUsProps> = ({ language, img }) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div className="w-full h-[30vh]">
      <div
        className="px-[7vw] py-[1vw] relative w-full h-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="relative font-bold text-white border-b-4 border-yellow-500 inline-block mt-8"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].gallery}
        </h1>
      </div>
    </div>
  );
};

export const OurServiceSection: React.FC<AboutUsProps> = ({
  language,
  img,
}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div className="w-full h-[30vh]">
      <div
        className="px-[7vw] py-[1vw] relative w-full h-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="relative font-bold text-white border-b-4 border-yellow-500 inline-block mt-8"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].ourProject}
        </h1>
      </div>
    </div>
  );
};

export const ContactSection: React.FC<AboutUsProps> = ({ language, img }) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  return (
    <div className="w-full h-[30vh]">
      <div
        className="px-[7vw] py-[1vw] relative w-full h-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="relative font-bold text-white border-b-4 border-yellow-500 inline-block mt-8"
          style={{ fontSize: "clamp(3rem, 5vw, 3rem)" }}
        >
          {translations[language].contactUs}
        </h1>
      </div>
    </div>
  );
};

interface AboutUsDescProps {
  id: string;
  language: string;
}

export const AboutSectionDescription: React.FC<AboutUsDescProps> = ({
  id,
  language,
}) => {
  const langKey = language.toUpperCase();
  const translations: { [key: string]: Translations } = Constants.translations;

  return (
    <section id={id} className="w-full flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl">
        {/* Left Section */}
        <div className="text-black flex flex-col items-center lg:items-start">
          <h1 className="text-2xl md:text-xl sm:text-xs">'ITSMA (อิษมา)'</h1>
          <p className="mt-6 indent-6 text-pretty sm:text-xs md:text-lg lg:text-[14px]">
            {translations[language].aboutPage2Description1}
          </p>
          <div className="w-full mt-6">
            <img src={aboutUsbuttom} alt="#" className="w-full h-auto" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left lg:justify-center">
          <h1 className="text-5xl sm:text-xl text-customBlue font-bold">
            THE BOXXET
          </h1>
          <h1 className="text-xs sm:text-[10px] text-black">
            (บริษัท เดอะ บ๊อกซ์เซ็ต จำกัด)
          </h1>
          <h1 className="text-xl text-black">DESIGN FOR YOUR FUTURE</h1>
          <div className="text-black flex flex-col text-wrap indent-6 mt-6 space-y-6">
            <p
              dangerouslySetInnerHTML={{
                __html: translations[language].aboutPage2Description2,
              }}
            />
            <p>{translations[language].aboutPage2Description3}</p>
            <p>{translations[langKey].aboutPage2Description4}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={aboutUsbuttomright}
            alt="styled"
            className="w-full h-auto max-w-[167px]"
          />
        </div>
      </div>
    </section>
  );
};

interface BoothProps {
  id: string;
  language: string;
  pageId: string;
}




export const BoothsSection: React.FC<BoothProps> = ({ id, pageId }) => {
  const selectedBoothCategory = BoothData.find((booth) => booth.id === pageId);
  const [selectedBoothId, setSelectedBoothId] = useState<string>(
    selectedBoothCategory?.data[0].title || ""
  );

  const selectedBooth = selectedBoothCategory?.data.find(
    (booth) => booth.title === selectedBoothId
  );
  console.log(selectedBooth);
  
  const [selectedImageIndex, setSelectedImagIndex] = useState(0);

  const swiperRef = useRef<any>(null);

  const handleThumbnailClick = (index: number) => {
    setSelectedImagIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <div id={id} className="flex flex-col w-full px-5 xl:px-40 mb-10">
      <div className="flex flex-col w-full ">
        <h1 className="text-black text-2xl xl:text-5xl font-bold text-start mt-5">
          {selectedBoothCategory?.titleMain}
        </h1>
        <div className="flex text-center gap-6 mt-4">
          {selectedBoothCategory?.data.map((booth, index) => (
            <div
              key={index}
              className={`group hover:bg-customYellow ${
                selectedBoothId === booth.title ? "bg-customYellow" : ""
              }`}
              onClick={() => setSelectedBoothId(booth.title)}
            >
              <img
                src={booth.img[0]}
                alt="#"
                className="w-20 h-20  xl:w-[167px] xl:h-[167px]"
              />
              <h1 className="text-[10px] xl:text-[18px]">{booth.title}</h1>
            </div>
          ))}
        </div>
        <div className="bg-customYellow w-full md:h-2 h-4 "></div>
        <div className="mt-6">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
            <div className="flex">
              <button className="swiper-button-prev-custom">
                <ArrowBackIosIcon />
              </button>
              <Swiper
                slidesPerView={1}
                initialSlide={selectedImageIndex}
                onSlideChange={(swiper) =>
                  setSelectedImagIndex(swiper.activeIndex)
                }
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // style={{ width: "434px", height: "406px" }}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                modules={[Navigation]}
                className="w-[300px] xl:w-[434px] h-[300px] xl:h-[406px]"
              >
                {selectedBooth?.img
                  .filter((img) => img)
                  .map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} className="w-full h-full" />
                    </SwiperSlide>
                  ))}
              </Swiper>
              <button className="swiper-button-next-custom">
                <ArrowBackIosIcon className="rotate-180" />
              </button>
            </div>

            <div className="w-full min-h-[490px] text-left xl:w-[630px] bg-gray-200 border-l-4 border-black xl:border-gray-400 flex flex-col">
              <div className="p-4 flex flex-col flex-grow">
                <div className="h-auto">
                  <h1 className="text-4xl ">
                    {selectedBooth?.title}
                  </h1>
                </div>

                {selectedBooth?.price && selectedBooth?.price.length > 0 && (
                  <div>
                    <h2 className=" text-sm md:text-base mt-6">ราคาเริ่มต้น</h2>
                    <h1 className="md:text-4xl font-bold text-3xl mt-4">
                    {selectedBooth.price}
                    </h1>
                  </div>
                )}
                    {selectedBooth?.title2 && selectedBooth?.title2.length > 0 && (
                      <h1 className="lg:text-xl mt-4 xl:mt-8 px-5 font-bold ">
                        {selectedBooth?.title2}
                      </h1>
                    )}

                <div className="mt-2 xl:mt-6 w-full flex-grow">
                  {selectedBooth?.descriptionTitle &&
                    selectedBooth?.descriptionTitle.length > 0 && (
                      <h1 className="lg:text-xl mt-4 xl:mt-0 px-5">
                        {selectedBooth?.descriptionTitle}
                      </h1>
                    )}

                

                  {/* Description (Mobile View) */}
                  <div className="xl:w-[488px] h-auto w-full md:hidden block">
                    {selectedBooth?.Description &&
                      selectedBooth.Description.length > 0 && (
                        <ul className="list-disc list-inside ml-5 mt-3 xl:border xl:border-gray-300 rounded-md xl:p-2">
                          {selectedBooth?.Description?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                  </div>

                  {/* Description (Desktop View) */}
                  <div className="w-full flex flex-col xl:flex-row items-start justify-start ml-4 ">
                    <div className="w-[80%] md:block hidden">
                      {selectedBooth?.Description &&
                        selectedBooth.Description.length > 0 && (
                          <ul className="list-disc list-inside self-start mt-3 xl:border xl:border-gray-300 rounded-md xl:p-2">
                            {selectedBooth?.Description?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        )}
                    </div>
                  </div>
                  {/* Implementation Button */}
                  <div className="w-full my-4 ">
                    {selectedBooth?.Implementation &&
                      selectedBooth?.Implementation.length > 0 && (
                        <ButtomBlue
                          title={selectedBooth?.Implementation ?? ""}
                        />
                      )}
                  </div>
                </div>

                {/* Contract Button ที่อยู่ล่างสุด */}
                <div className="mt-auto flex justify-center items-center">
                  <ContractButtom />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-start">
            {selectedBooth?.img.map((img, index) => (
              <div
                key={index}
                className={`xl:w-[182px] xl:h-[164px] w-20 h-20 gap-2 border-2 transition-all duration-300 ${
                  selectedImageIndex === index
                    ? "border-customYellow"
                    : "border-transparent"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-20 h-20 xl:w-full xl:h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ButtomBlueProps {
  title: string;
}
const ButtomBlue: React.FC<ButtomBlueProps> = ({ title }) => {
  return (
    <div className="bg-[#0E2433] text-white text-center px-6 py-2 rounded-full text-xs font-medium mt-6">
      {title}
    </div>
  );
};

const ContractButtom: React.FC = () => {
  return (
    <Link
      to={"/contact"}
      className="bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-lg focus:outline-dashed hover:text-white"
    >
      Contact
    </Link>
  );
};

export const ContractComponent: React.FC<AboutUsDescProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    mail: "",
    subject: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ฟังก์ชันส่งอีเมล
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDescription = `เรื่อง: ${formData.subject} \n\nเรียน: ทางบริษัท The Boxxet \n\n ขอแสดงความนับถือ,\n\n จาก ${formData.name} มีความประสงค์ต้องการติดต่อข้อมูลเพิ่มเติมเกี่ยวกับ${formData.description} \n\n ขอแสดงความนับถือ,\n ${formData.name}\nเบอร์ติดต่อ: ${formData.phone}`;

    // สร้างข้อมูลที่ต้องการส่ง
    const mailtoLink = `mailto:theboxxet.contact@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formattedDescription)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-6 w-full md:w-1/2">
        <img src={TheBoxxetMailImg} alt="The Boxxet" className="w-32 h-32" />
        <div className="flex items-center gap-2">
          <MailOutlineIcon />
          <p>theboxxet.contact@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <p>095-956-5419, 064-265-9428</p>
        </div>
        <div className="flex items-start gap-2 text-left">
          <LocationOnOutlinedIcon />
          <a href="https://www.google.com/maps/dir//The+Villa+Ramintra+14+134+The+Villa+%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B2-%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B8%A7%E0%B8%99+Tha+Raeng,+Bang+Khen,+Bangkok+10220/@13.8594214,100.6666058,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x311d63299f994771:0xe8a631c6d650331d!2m2!1d100.6666024!2d13.8594292?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D">
            <div>
              <p className="font-bold">The Villa Ramindra</p>
              <p className="w-[238px] text-pretty">
                The Villa Ramindra 14, 134 The Villa Ramindra Bang Khen Tha
                Raeng, Bang Khen, Bangkok 10220
              </p>
            </div>
          </a>
        </div>
        <div className="flex items-start gap-2 text-left">
          <FacebookOutlinedIcon />
          <div>
            <p className="font-bold">THE BOXXET</p>
            <a href="https://www.facebook.com/boxxet">facebook.com/boxxet</a>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <FaLine />
          <div>
            <p className="font-bold">Line Official</p>
            <img src={LineIcon} alt="Line Official" className="w-24 h-24" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold">ติดต่อเรา</h1>
        <p className="mt-4">กรุณากรอกข้อมูลด้านล่างเพื่อติดต่อเรา</p>
        <form className="mt-6 space-y-4" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="ชื่อ"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="เบอร์ติดต่อ"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="email"
            name="mail"
            placeholder="อีเมล"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="หัวข้อ"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="รายละเอียด"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 h-32"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
          >
            ส่ง
          </button>
        </form>
      </div>
    </section>
  );
};

interface GalleryProps {
  id: string;
  language: string;
  page: Number;
}

export const GalleryComponentPage: React.FC<GalleryProps> = ({
  id,
  language,
}) => {
  const translations: { [key: string]: Translations } = Constants.translations;
  const totalPages = GalleryImg.length;
  const [currentPage, setCurrentPage] = useState(1);

  // หารูปของหน้าปัจจุบัน
  const currentGallery = GalleryImg.find((g) => g.page === currentPage);
  const selectedImages = currentGallery ? currentGallery.images : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div id={id} className="container mx-auto h-auto mt-8 px-4">
      <div className="flex flex-col items-center text-center">
        {/* Title Section */}
        <div className="self-start px-4 md:px-10">
          <h1 className="text-lg md:text-xl font-semibold">
            {translations[language].galleryDescription}
          </h1>
        </div>

        {/* Gallery Images Section */}
        <div className="w-full max-w-6xl mt-6">
          <GalleryImgSection images={selectedImages} />
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-between items-center w-full max-w-xs sm:max-w-sm mt-10 mb-8">
          <button
            className={`px-4 py-2 bg-gray-200 rounded transition ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 bg-gray-200 rounded transition ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

interface GalleryImgSectionProps {
  images: string[];
}

const GalleryImgSection: React.FC<GalleryImgSectionProps> = ({ images }) => {
  return (
    <div className="mt-6 container mx-auto px-4">
      {/* รูปหลักบนสุด */}
      <div className="w-full max-w-6xl mx-auto">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* แถวที่ 1 (3 รูป) */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(1, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        ))}
      </div>

      {/* รูปหลักกลาง */}
      <div className="w-full max-w-6xl mx-auto mt-6">
        <img
          src={images[4]}
          alt=""
          className="w-full h-fullrounded-lg object-cover"
        />
      </div>

      {/* แถวที่ 2 (3 รูป) */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(5, 8).map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};
