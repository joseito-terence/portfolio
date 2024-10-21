import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";

export const socials = [
  { name: 'Github', link: 'https://github.com/joseito-terence', Icon: IconBrandGithub },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/joseito-terence', Icon: IconBrandLinkedin }
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  return (
    <footer
      id="contact"
      className="bg-[#273449] flex justify-center items-center overflow-hidden mt-10"
    >
      <div
        className="flex flex-col md:flex-row w-full md:w-[700px] md:m-3 bg-primary md:rounded-xl"
      >
        <div
          className="w-full md:w-[270px] bg-secondary-content text-inherit md:rounded-xl p-5 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold">Contact</h1>
            <p className="text-xl font-light mb-9 tracking-wide">
              Any questions or remarks? Just write me a message
            </p>
          </div>

          <div>
            <a href="mailto:joseito.terence@gmail.com" className="flex items-center gap-1 cursor-pointer">
              <IconMail size={32} />
              <span>joseito.terence@gmail.com</span>
            </a>

            <a href="tel:+447867633529" className="flex items-center gap-1 cursor-pointer">
              <IconPhone size={32} />
              <span>+44 7867 633529</span>
            </a>
          </div>
        </div>
        <div className="flex-1 p-4">
          <form className="flex flex-col gap-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <Input as='textarea' id="message" className="h-32" />
            </LabelInputContainer>

            <button
              type="button"
              className="
              flex flex-row items-center justify-center gap-2
              relative
              px-12
              bg-gradient-to-br group/btn from-zinc-900 to-zinc-900 bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"

              // className="btn mt-7  group  {!isSending && 'pr-[40px]'}"
            >
              {isSending ? (
                <>
                  Sending
                  <span className="loading loading-spinner" />
                </>
              ) : (
                <>
                  Send Message
                </>
              )}
              <div
                className="w-[25px] h-[25px]
              
							transition-all group-hover/btn:rotate-12 {isSending && 'plane'}"
              >
                <IconSend />
              </div>
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
