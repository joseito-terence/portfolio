import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  return (
    <header>
      <FloatingNav 
        navItems={navItems}
        className="isolate bg-white/20 shadow-lg ring-1 ring-black/5"
      />
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
