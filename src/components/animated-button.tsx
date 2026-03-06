import { motion, MotionProps } from "motion/react";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { ArrowRight } from "lucide-react";

type CustomProps = {
  invertMode?: boolean;
  variant?: "default" | "outline";
  noArrow?: boolean;
};

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  CustomProps;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  invertMode,
  variant = "default",
  noArrow,
  ...props
}) => {
  const isOutline = variant === "outline";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      {...props}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) setIsHovered(true);
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        props.onMouseLeave?.(e);
      }}
      whileTap={{ ...(disabled ? {} : { scale: 0.95 }) }}
      transition={{ duration: 0.15 }}
      style={{
        padding: noArrow ? "12px 24px" : "12px 32px 12px 24px",
        fontWeight: "bold",
        userSelect: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0px",
        overflow: "hidden",
        position: "relative",
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
        border: `1px solid ${disabled
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
      {noArrow ? (
        children
      ) : (
        <>
          <motion.span
            animate={{ x: isHovered && !disabled ? -6 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            {children}
          </motion.span>

          <motion.span
            animate={{
              opacity: isHovered && !disabled ? 1 : 0,
              x: isHovered && !disabled ? 0 : -6,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              position: "absolute",
              right: "10px",
            }}
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.span>
        </>
      )}
    </motion.button>
  );
};

export default Button;

