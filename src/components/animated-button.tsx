import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC } from "react";

type CustomProps = {
  invertMode?: boolean;
  variant?: "default" | "outline";
};

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  CustomProps;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  invertMode,
  variant = "default",
  ...props
}) => {
  const isOutline = variant === "outline";

  return (
    <motion.button
      {...props}
      disabled={disabled}
      whileHover={{
        ...(disabled
          ? {}
          : {
              backgroundColor: isOutline
                ? "hsl(var(--foreground) / 0.1)"
                : invertMode
                ? "hsl(var(--background) / 0.7)"
                : "hsl(var(--foreground) / 0.3)",
            }),
        ...(disabled
          ? {}
          : {
              color: isOutline
                ? "hsl(var(--foreground))"
                : invertMode
                ? "hsl(var(--background))"
                : "hsl(var(--foreground))",
            }),
        backdropFilter: "blur(5px)",
      }}
      whileTap={{ ...(disabled ? {} : { scale: 0.95 }) }}
      transition={{ duration: 0.15 }}
      style={{
        padding: "8px 16px",
        fontWeight: "bold",
        userSelect: "none",
        backgroundColor: disabled
          ? "hsl(var(--foreground) / 0.6)"
          : isOutline
          ? "transparent"
          : invertMode
          ? "hsl(var(--background))"
          : "hsl(var(--foreground))",
        color: isOutline
          ? "hsl(var(--foreground))"
          : !invertMode
          ? "hsl(var(--background))"
          : "hsl(var(--foreground))",
        border: `1px solid ${
          disabled
            ? "hsl(var(--foreground) / 0.2)"
            : isOutline
            ? "hsl(var(--foreground))"
            : invertMode
            ? "hsl(var(--background))"
            : "hsl(var(--foreground))"
        }`,
        ...props?.style,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
