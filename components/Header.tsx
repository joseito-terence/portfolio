import { FloatingNav } from "./ui/floating-navbar";

export default function Header() {
  return (
    <header className="py-6">
      <h1 className="text-4xl font-bold">Your Name</h1>
      <p className="text-xl">Software Developer</p>

      <FloatingNav navItems={navItems} />
    </header>
  );
}

const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    // icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
