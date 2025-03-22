import React, { createContext, useState, useContext, ReactNode } from "react";
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import {BoothData} from "../constants/Booth-System-index-v1"


export const ToggleLanguage = (
    lang: "EN" | "TH",
    setLanguage: React.Dispatch<React.SetStateAction<"EN" | "TH">>,
    setLanguageDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

export const ScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

interface LanguageDropdownProps {
    setLanguage: (lang: "EN" | "TH") => void;
    setLanguageDropdownOpen: (open: boolean) => void;
  }
  
  export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ setLanguage, setLanguageDropdownOpen }) => {
    const handleLanguageChange = (lang: "EN" | "TH") => {
      setLanguage(lang);
      setLanguageDropdownOpen(false);
    };
  
    return (
      <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow-lg py-2 z-50 w-40">
        <div className=" hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => handleLanguageChange("EN")}>
          English
        </div>
        <div className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer" onClick={() => handleLanguageChange("TH")}>
          ภาษาไทย
        </div>
      </div>
    );
  };

export const IconArrowForward = ({ size = "text-sm" }: { size?: string }) =>{
    return (
        <a href="#" className={`material-symbols-outlined ${size}`}>arrow_forward_ios</a>
    );
};

export const ServiceDropDown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (titleMain: string) => {
    setOpenDropdown(openDropdown === titleMain ? null : titleMain);
  };

  const navigate = useNavigate();

  return (
    <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow- py-2 z-50 w-64 ">
        <div onClick={() => navigate("/gallery")} className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left ml-2 mr-2">
          <p>All Service</p>  
        </div>
      {BoothData.map((category) => (
        <div key={category.id} className="flex rounded relative">
          {/* Main Dropdown */}
          <div
            className="w-full text-left text-lg p-2 rounded"
            onClick={() => toggleDropdown(category.titleMain)}
          >
            <div className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
              <p>{category.titleMain}</p>
              <IconArrowForward size={"text-sm"} />
            </div>
          </div>

          {/* Submenu - If Open */}
          {openDropdown === category.titleMain && (
            <div className="absolute left-64 mt-2 space-y-2 bg-customBlue rounded shadow w-64">
              {category.data.map((item) => (
                <div key={item.title} className="relative">
                  {/* Sub Dropdown */}
                  <div
                    className="w-full text-left text-md p-2 rounded"
                    onClick={() => navigate(category.link)}
                  >
                    <div className="flex justify-between px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer text-left">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:"smooth"}); 
  }, [pathname]); 

  return null; 
};

type Language = "EN" | "TH";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// 2️⃣ สร้าง Context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// 3️⃣ สร้าง Provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "EN"
  );

  const changeLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };
  

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4️⃣ สร้าง Hook ให้ใช้ภาษาได้ง่ายขึ้น
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageSwitcher: React.FC = ({}) => {
  const { setLanguage } = useLanguage(); // ใช้ setLanguage
  return (
    <div className="absolute bg-customBlue text-customYellow mt-2 rounded shadow-lg py-2 z-50 w-40 flex flex-col">
      <button
        className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer mt-2 text-left"
        onClick={() => setLanguage("EN")}
      >
        EN
      </button>
      <button
        className="px-4 py-2 hover:text-black hover:bg-customYellow cursor-pointer mt-2 text-left"
        onClick={() => setLanguage("TH")}
      >
        TH
      </button>
    </div>
  );
};

export const LanguageSwitcherApp: React.FC = ({}) => {
  const { setLanguage } = useLanguage(); // ใช้ setLanguage
  return (
    <div className="text-white mt-2 rounded-md shadow-lg w-24 flex flex-col">
      <button
        className="hover:text-yellow-400"
        onClick={() => setLanguage("EN")}
      >
        EN
      </button>
      <button
        className="hover:text-yellow-400"
        onClick={() => setLanguage("TH")}
      >
        TH
      </button>
    </div>
  );
};


 export const FacebookPagePlugin = () => {
  useEffect(() => {
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="fb-page"
      data-href="https://www.facebook.com/boxxet"
      data-tabs="timeline"
      data-width="200"
      data-height="200"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="true">
      <blockquote cite="https://www.facebook.com/boxxet" className="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/boxxet">The Boxxet - บริการให้เช่าอุปกรณ์ออกบูธครบวงจร</a>
      </blockquote>
    </div>
  );
};
