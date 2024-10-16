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
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
];
