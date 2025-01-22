import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  height?: string;
  width?: string;
  padding?: string;
  background?: string;
  shadow?: string;
  border?: string;
  overflow?: string;
}

export default function Modal({ 
    children, 
    height = "auto", 
    width = "auto", 
    padding="2px", 
    background= "rgb(255, 255, 255)",
    shadow="0 2px 10px rgba(0, 0, 0, 0.1)",
    border="8px",
    overflow="auto"
}: ModalProps) {
  return (
    <div
        style={{ 
        height, 
        width,
        padding,
        background,
        boxShadow: shadow,
        borderRadius: border,
        overflow: overflow,
        maxWidth: '95vw',
        maxHeight: '95vh'
        }}
    >
    {children}
    </div>
  );
}