import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC } from "react";

type CustomProps = {
  invertMode?: boolean;
};

type ButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

const Button: FC<ButtonProps> = ({ children, disabled, invertMode, ...props }) => {
  return (
    <motion.button
      {...props}
      disabled={disabled}
      whileHover={{
        ...(disabled ? {} : { backgroundColor: invertMode ? "rgb(var(--bg-rgb),.7)" : "rgb(var(--primary-rgb),.3)" }),
        ...(disabled ? {} : { color: invertMode ? "var(--bg)" : "var(--primary)" }),
        backdropFilter: "blur(5px)",
      }}
      whileTap={{ ...(disabled ? {} : { scale: 0.95 }) }}
      transition={{ duration: 0.15 }}
      style={{
        padding: "8px 16px",
        fontWeight: "bold",
        userSelect: "none",
        backgroundColor: disabled ? "rgb(var(--primary-rgb),.6)" : invertMode ? "var(--bg)" : "var(--primary)",
        color: !invertMode ? "var(--bg)" : "var(--primary)",
        border: `1px solid ${disabled ? "rgb(var(--primary-rgb),.2)" : invertMode ? "var(--bg)" : "var(--primary)"}`,
        ...props?.style,

        // borderRadius: 5,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
