import { motion, MotionProps } from "motion/react";
import React, { ButtonHTMLAttributes, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CustomProps = {
  invertMode?: boolean;
  variant?: "default" | "outline";
  noArrow?: boolean;
};

type ButtonProps = MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  CustomProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      invertMode,
      variant = "default",
      noArrow,
      className,
      ...props
    },
    ref
  ) => {
    const isOutline = variant === "outline";
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.button
        ref={ref}
        {...props}
        disabled={disabled}
        onMouseEnter={(e) => {
          if (!disabled) setIsHovered(true);
          props.onMouseEnter?.(e as any);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          props.onMouseLeave?.(e as any);
        }}
        whileTap={{ ...(disabled ? {} : { scale: 0.95 }) }}
        transition={{ duration: 0.15 }}
        className={cn(
          "inline-flex items-center justify-center relative overflow-hidden rounded-full font-bold select-none border",
          noArrow ? "px-6 py-3" : "pl-6 pr-8 py-3",
          isOutline
            ? "bg-transparent text-foreground border-foreground"
            : invertMode
              ? "bg-background text-foreground border-background"
              : "bg-foreground text-background border-foreground",
          disabled && "opacity-60 cursor-not-allowed",
          className
        )}
      >
        {noArrow ? (
          children
        ) : (
          <>
            <motion.span
              animate={{ x: isHovered && !disabled ? -6 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center"
            >
              {children}
            </motion.span>

            <motion.span
              animate={{
                opacity: isHovered && !disabled ? 1 : 0,
                x: isHovered && !disabled ? 0 : -6,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center absolute right-2.5"
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.span>
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "AnimatedButton";

export default Button;


