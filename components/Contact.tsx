import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "./ui/fade-up";
import useClipboard from "react-use-clipboard";

export const socials = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joseito-terence', Icon: IconBrandLinkedin },
  { name: 'Github', link: 'https://github.com/joseito-terence', Icon: IconBrandGithub }
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
            <ContactCard
              text="joseito.terence@gmail.com"
              link="mailto:joseito.terence@gmail.com"
              Icon={IconMail}
            />
          </FadeUp>

          <FadeUp duration={1.5} delay={0.5}>
            <ContactCard
              text="+44 7867 633529"
              link="tel:+447867633529"
              Icon={IconPhone}
            />
          </FadeUp>

          <FadeUp duration={1.5} delay={1}>
            <Card>
              <div className="flex flex-row justify-center items-center gap-5 mx-auto px-4 py-7">
                {socials.map(({ name, link, Icon }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    className="w-full flex items-center justify-between border border-gray-500 rounded-full p-2 hover:bg-sky-50/15"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </Card>
          </FadeUp>
        </div>
      </div>
    </footer>
  );
}

const ContactCard = ({
  text,
  link,
  Icon,
}: {
  text: string;
  link: string;
  Icon: typeof IconMail;
}) => {
  const [isCopied, setIsCopied] = useClipboard(text, {
    successDuration: 1000,
  });

  return (
    <Card>
      <div className="w-full flex items-center justify-between gap-4 px-4 py-8">
        <Icon size={30} />

        <h1 className="w-full font-bold text-xl text-center text-white relative z-50">
        <a href={link}>
          {text}
        </a>
      </h1>

        <button onClick={setIsCopied} className="aspect-square border px-2 py-1 rounded-lg  border-gray-500 text-gray-300">
          {isCopied
            ? <IconCheck size={20} />
            : <IconCopy size={20} />
          }
        </button>
      </div>      
    </Card>
  )
}

const Card = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <div>
    <div className="w-full relative min-w-[300px]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        {children}
      </div>
    </div>
  </div>
)

