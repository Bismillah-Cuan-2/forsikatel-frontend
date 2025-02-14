import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    color?: string
    Icon?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color="bg-neutral-50", className, Icon, ...props }) => {
  return (
    <button className={`flex items-center px-4 py-2 font-source ${color} ${className || ""}`} {...props}>
        <span>{ Icon && <img src={Icon} />}</span>
        <span>{ children }</span>
    </button>
  )
}

export default Button