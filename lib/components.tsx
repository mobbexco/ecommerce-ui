import { motion, MotionStyle } from 'framer-motion';
import { CSSProperties, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const slideTopAnimation = {
  initial: { y: -500 },
  exit: { y: -500 },
  animate: { y: 0 },
  transition: { ease: 'easeInOut' },
};

export function Loading() {
  const styles: MotionStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.439)',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
    zIndex: 998,
  };

  const spinnerStyles: CSSProperties = {
    height: '30px',
    width: '30px',
    boxSizing: 'border-box',
    border: '3px solid #7000ff',
    borderTopColor: '#ffffff',
    borderRadius: '100%',
    animation: 'rotation .7s infinite linear',
  };

  return (
    <motion.div style={styles} {...slideTopAnimation}>
      <div style={spinnerStyles}></div>
    </motion.div>
  );
}

export function ToastError({ message }: { message: string }) {
  useEffect(() => {
    toast.dismiss();
    toast.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }, [message]);

  return <ToastContainer />;
}
