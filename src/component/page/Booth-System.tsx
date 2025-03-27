import NavBar from "../navigationBar/NavBar";
import { OurProject, FooterSection, BoothsSection,MaximaCostomBooth } from "./Session";
import ourProject from "../../assets/page/our-project.png";
import { useLanguage } from "../utils/ComponentsUtil";
import useStore from "../../store";
import { useEffect } from "react";

const Boots: React.FC = () => {
  const { language } = useLanguage();
  const { withLanguage, setWithLanguage } = useStore();
  useEffect(() => {
    const handleResize = () => {
      setWithLanguage(window.innerWidth > 2400);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setWithLanguage]);

  return (
    <div className={`${withLanguage ? "container mx-auto" : ""}`}>
      <NavBar />
      <BoothsSection id="about-boots-section" language={language} pageId="1" />
      <MaximaCostomBooth/>
      <OurProject
        id="ourProject-boots-section"
        language={language}
        pic={ourProject}
      />
      <FooterSection id="footer-boots-section" language={language} />
    </div>
  );
};

export default Boots;
