import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  type?: "words" | "chars" | "lines";
}

const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  type = "words",
}: TextRevealProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === "chars") {
    const chars = children.split("");
    return (
      <motion.span
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === "lines") {
    const lines = children.split("\n");
    return (
      <motion.span
        className={`block ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {lines.map((line, index) => (
          <span key={index} className="block overflow-hidden">
            <motion.span
              variants={itemVariants}
              className="block"
              style={{ transformOrigin: "bottom" }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  // Default: words
  const words = children.split(" ");
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={itemVariants}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
