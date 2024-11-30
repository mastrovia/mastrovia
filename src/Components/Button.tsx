import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC } from "react";

type CustomProps = {
  invertMode?: boolean;
};

type ButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

const Button: FC<ButtonProps> = ({ children, invertMode, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{
        // scale: 1.1,
        // backgroundColor: !invertMode ? "var(--bg)" : "var(--primary)",
        backgroundColor: "#00000000",
        color: invertMode ? "var(--bg)" : "var(--primary)",
        backdropFilter: "blur(5px)",
      }}
      transition={{ duration: 0.15 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "8px 16px",
        fontWeight: "bold",
        userSelect: "none",
        backgroundColor: invertMode ? "var(--bg)" : "var(--primary)",
        color: !invertMode ? "var(--bg)" : "var(--primary)",
        border: `1px solid ${invertMode ? "var(--bg)" : "var(--primary)"}`,
        ...props?.style,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
