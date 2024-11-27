import { ButtonHTMLAttributes, FC } from "react";
// import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: "8px 16px 8px 16px",
        backgroundColor: "var(--primary)",
        color: "var(--bg)",
        fontWeight: "bold",
        ...props?.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
