import { IconHexagonLetterD } from "@tabler/icons-react";
import SideBar from "./SideBar";

const navLinks = (col: boolean) => {
  const links = ["About", "Projects", "Skills", "Experience", "Contact"];

  return links.map((link, index) => (
    <a
      key={index}
      href={`#${link}`}
     
      className={`${col ? "flex flex-col items-center" : ""} text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200`}
    >
      <span className="text-primary">0{index + 1}.&nbsp;</span>
      {link}
    </a>
  ));
};

const Header = () => {
  return (
    <nav className={`flex bg-color h-28 justify-between items-center px-10 font-mono`}>
      <IconHexagonLetterD
        stroke={2}
        size={60}
        color="#64FFDA"
        className=" relative z-100"
      />
      <div className="sm:flex gap-4 hidden sm:text-xl">{navLinks(false)}</div>
      <SideBar />
    </nav>
  );
};

export default Header;
// eslint-disable-next-line react-refresh/only-export-components
export {navLinks}
