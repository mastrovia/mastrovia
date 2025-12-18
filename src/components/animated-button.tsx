import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC } from "react";

type CustomProps = {
  invertMode?: boolean;
};

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  CustomProps;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  invertMode,
  ...props
}) => {
  return (
    <motion.button
      {...props}
      disabled={disabled}
      whileHover={{
        ...(disabled
          ? {}
          : {
              backgroundColor: invertMode
                ? "hsl(var(--background) / 0.7)"
                : "hsl(var(--foreground) / 0.3)",
            }),
        ...(disabled
          ? {}
          : {
              color: invertMode
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
          : invertMode
          ? "hsl(var(--background))"
          : "hsl(var(--foreground))",
        color: !invertMode
          ? "hsl(var(--background))"
          : "hsl(var(--foreground))",
        border: `1px solid ${
          disabled
            ? "hsl(var(--foreground) / 0.2)"
            : invertMode
            ? "hsl(var(--background))"
            : "hsl(var(--foreground))"
        }`,
        // textTransform: "uppercase",
        // fontFamily: '"Alumni Sans", sans-serif',
        ...props?.style,

        // borderRadius: 5,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
