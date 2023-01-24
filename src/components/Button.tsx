import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, ...rest }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className="px-4 py-2 bg-orange-400 rounded font-bold"
      {...rest}
    />
  );
}
