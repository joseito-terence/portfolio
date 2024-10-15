import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  return (
    <header className="py-6">
      <h1 className="text-4xl font-bold">Joseito</h1>
      <p className="text-xl">Software Developer</p>

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
