import { ReactNode } from "react";
import css from "./styles.module.css";

interface ModalProps {
  children: ReactNode;
  height?: string;
  width?: string;
  padding?: string;
  background?: string;
  shadow?: string;
}

export default function Modal({ 
    children, 
    height = "auto", 
    width = "auto", 
    padding="2px", 
    background= "rgb(255, 255, 255)",
    shadow="0 2px 10px rgba(0, 0, 0, 0.1)"
}: ModalProps) {
  return (
    <div 
        className={css.modalContent}
        style={{ 
        height, 
        width,
        padding,
        background,
        boxShadow: shadow,
        maxWidth: '95vw',
        maxHeight: '95vh'
        }}
    >
    {children}
    </div>
  );
}