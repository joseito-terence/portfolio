import { skills } from "@/app/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    },
  },
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: typeof skills;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      className={cn(
        "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 py-4",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map(({ Icon, ...item }, idx) => (
        <motion.div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          variants={itemVariants}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Icon 
              width={100}
              height={100}
              fill={item.accent}
              className="w-12 h-12 md:w-20 md:h-20 group-hover:drop-shadow-[0_0_1.5px_var(--accent)] transition-all"
              // @ts-ignore
              style={{ '--accent': item.accent }}
            />
            <CardTitle>{item.name}</CardTitle>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-primary border border-white/[0.2] group-hover:border-slate-700 relative z-20 flex justify-center items-center",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col justify-center items-center">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 text-center font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
