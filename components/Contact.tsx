import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconCopy,
} from "@tabler/icons-react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./ui/fade-up";

export const socials = [
  { name: 'Github', link: 'https://github.com/joseito-terence', Icon: IconBrandGithub },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joseito-terence', Icon: IconBrandLinkedin }
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (isInView && !shown) {
      setShown(true)
    }
  }, [isInView])

  return (
    <footer
      ref={ref}
      id="contact"
      className="h-[40rem] w-full rounded-md bg-gradient-to-t from-primary from-80% via-primary/60 to-transparent relative flex flex-col items-center justify-center antialiased"
    >
      <div className="h-[50rem] w-full bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
        <div className="w-full z-30">
          {shown &&
            <TextHoverEffect text="CONTACT" />
          }
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-10 md:-mt-40 z-40">
          <FadeUp duration={1.5}>
            <Card
              text="joseito.terence@gmail.com"
              link="mailto:joseito.terence@gmail.com"
              Icon={IconMail}
            />
          </FadeUp>

          <FadeUp duration={1.5} delay={0.5}>
            <Card
              text="+44 7867 633529"
              link="tel:+447867633529"
              Icon={IconPhone}
            />
          </FadeUp>
        </div>
      </div>
    </footer>
  );
}

export function Card({
  text,
  link,
  Icon,
}: {
  text: string;
  link: string;
  Icon?: typeof IconMail;
}) {
  return (
    <div>
      <div className="w-full relative min-w-[300px]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="w-full flex items-center justify-between mb-4">
            <Icon size={30} />

            <button className="aspect-square border px-2 py-1 rounded-lg  border-gray-500 text-gray-300">
              <IconCopy size={20} />
            </button>
          </div>

          <h1 className="w-full font-bold text-xl text-center text-white mb-4 relative z-50">
            <a href={link}>
              {text}
            </a>
          </h1>


        </div>
      </div>
    </div>
  );
}

