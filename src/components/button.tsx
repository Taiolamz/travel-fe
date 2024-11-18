import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
  }

const Button = ({children, type, className, ...props}: ButtonProps)  => {
  return (
    <button
      type={type}
      className={cn(
        "bg-[#0D6EFD] px-[16px] py-[8px] text-white hover:-translate-y-1 transition-all duration-300 rounded-[4px] outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
