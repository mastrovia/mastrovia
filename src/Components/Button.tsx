import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = MotionProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "8px 16px",
        fontWeight: "bold",
        userSelect: "none",
        ...props?.style,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
