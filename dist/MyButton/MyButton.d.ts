import React from "react";
import "./MyButton.css";
export interface MyButtonProps {
    color: string;
    big?: boolean;
    children?: React.ReactNode;
}
export default function MyButton({ children, color, big, ...props }: MyButtonProps): JSX.Element;
