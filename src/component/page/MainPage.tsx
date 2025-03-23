import { useEffect, useState } from "react";
import imageMainPage from "../../assets/page/mainPagePic.png";
import theBoxxetIcon from "../../assets/logo/the-boxext.png";
import transalateIcon from "../../assets/logo/g_translate.png";
import dropDownIcon from "../../assets/logo/Chevron down.png";
import {
  Session,
  OurProject,
  CustomerSection,
  FooterSection,
  ServiceSection,
} from "./Session";
import Button from "./Button";
import AboutUsImage from "../../assets/page/about-us.png";
import OurProjectImg from "../../assets/page/our-project.png";
import { Link, useNavigate } from "react-router-dom";
import {
  ServiceDropDown,
  LanguageSwitcher,
  useLanguage,
} from "../utils/ComponentsUtil";
import HambergerNavBar from "../navigationBar/hamberger-nav-bar";
import useStore from "../../store";
import { Constants, Translations } from "../constants/Constants";

const MainPage: React.FC = () => {
  const { withLanguage, setWithLanguage } = useStore();

  useEffect(() => {
    const handleResize = () => {
      setWithLanguage(window.innerWidth > 2400);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setWithLanguage]);

  // constant

  const DESIGN_MESSAGE: string = "DESIGN FOR YOUR FUTURE";
  const THE_BOXXET: string = "THE BOXXET";
  const { language } = useLanguage();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  interface IntroSectionProps {
    language: string;
  }

  const IntroSectionOfMainPage:React.FC<IntroSectionProps> = ({language}) => {
    const translations: { [key: string]: Translations } = Constants.translations;
    return (
      <div className="relative flex flex-col items-center justify-center w-full px-4 text-center pb-20">
        {/* ข้อความด้านบน */}
        <p className="text-customeWhite font-bold text-2xl sm:text-3xl md:text-5xl leading-tight tracking-wide mt-60 w-full">
          {DESIGN_MESSAGE}
        </p>

        {/* ข้อความใหญ่ */}
        <p className="text-customYellow font-bold text-5xl sm:text-6xl md:text-8xl tracking-wider flex-1 w-full ">
          {THE_BOXXET}
        </p>

        {/* คำอธิบาย */}
        <p className="text-customeWhite text-lg sm:text-xl md:text-2xl italic max-w-screen-md mt-40">
          {translations[language].BoothIntro}
        </p>

        {/* ติดต่อเรา */}
        <Link to={"/contact"}
          className="text-customYellow text-lg sm:text-xl md:text-2xl italic mt-4"
        >
          {translations[language].BoothContract}
        </Link>
      </div>
    );
  };

  const NavSectionOfMainPage = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener("resize", checkScreenSize);
      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }, []);

    if (isMobile) {
      return (
        <div className="relative top-0 left-0 w-full z-50 bg-transparent">
          <HambergerNavBar />
        </div>
      );
    } else {
      return (
        <div className="relative top-0 left-0 w-full z-50 bg-transparent ">
          <div className="container mx-auto max-w-screen-xl flex justify-between items-center py-4 px-6 text-white">
            {/* ด้านซ้าย  Icon */}
            <div className="flex items-center gap-4">
              <a href="#">
                <img
                  src={theBoxxetIcon}
                  alt="Logo"
                  className="w-14 uppercase ml-8"
                />
              </a>
            </div>

            {/* ด้านขวา */}
            <div className="flex gap-4 items-center">
              <button onClick={() => setCurrentPage("home")}>
                {Button.LetterNavBarButton("#", language, "home")}
              </button>
              <button onClick={() => navigate("/about-us")}>
                {Button.LetterNavBarButton("#", language, "about")}
              </button>
              <button>
                <div className="relative">
                  <div
                    className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                  >
                    {Button.LetterNavBarButton("#", language, "service")}
                    <img
                      src={dropDownIcon}
                      alt="Dropdown Icon"
                      className="w-3"
                    />
                  </div>
                  {serviceDropdownOpen && <ServiceDropDown />}
                </div>
              </button>
              <Link to={"/gallery-page"}>
                <button>
                  {Button.LetterNavBarButton("#", language, "gallery")}
                </button>
              </Link>
              <Link to={"/contact"}>
                <button>
                  {Button.LetterNavBarButton("#", language, "contactUs")}
                </button>
              </Link>
              <span>|</span>
              <div className="relative">
                <div
                  className="flex gap-1 items-center cursor-pointer hover:text-black hover:bg-customYellow px-3 py-2 rounded"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  <img
                    src={transalateIcon}
                    alt="Translate Icon"
                    className="w-6"
                  />
                  <span>{language}</span>
                  <img src={dropDownIcon} alt="Dropdown Icon" className="w-3" />
                </div>
                {/* เรียกใช้งาน function languageDropdown */}
                {languageDropdownOpen && <LanguageSwitcher />}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // ALL Service dropdown

  return (
    <div className={`${withLanguage ? "container mx-auto" : ""}`}>
      <div className="relative h-auto bg-gray-900">
        <img
          src={imageMainPage}
          alt="Styled"
          className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50 contrast-150"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#09283C] opacity-50"></div>
        <div>
          <NavSectionOfMainPage />
          {currentPage === "home" && <IntroSectionOfMainPage language={language}/>}
        </div>
      </div>
      <Session
        id="about-section"
        language={language}
        pic={AboutUsImage}
        landing="#"
      />
      <ServiceSection
        id="service-section"
        language={language}
        img={imageMainPage}
      />
      <OurProject
        id="ourProject-section"
        language={language}
        pic={OurProjectImg}
      />
      <CustomerSection id="customer-section" language={language} />
      <FooterSection id="footer-section" language={language} />
    </div>
  );
};

export default MainPage;
