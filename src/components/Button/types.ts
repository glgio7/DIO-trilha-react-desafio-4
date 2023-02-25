import { ButtonHTMLAttributes } from "react";

export interface IButtonProps {
    title: string;
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}