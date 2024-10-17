import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  return (
    <header>
      <FloatingNav navItems={navItems} />
    </header>
  );
}

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },

];
