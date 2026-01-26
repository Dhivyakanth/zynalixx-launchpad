import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  strength?: number;
}

const MagneticButton = ({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className="magnetic-target inline-block"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${buttonStyles} ${className} flex items-center gap-2`}
      >
        <motion.span
          animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
          transition={{ type: "spring", stiffness: 350, damping: 15 }}
          className="flex items-center gap-2"
        >
          {children}
        </motion.span>
      </motion.button>
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return content;
};

export default MagneticButton;
