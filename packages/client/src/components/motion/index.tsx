import { ReactElement } from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  children: JSX.Element;
  extraClassName: string;
};

export default function Motion({
  children,
  extraClassName = '',
}: Props): ReactElement {
  return (
    <motion.div
      className={extraClassName}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      variants={item}
    >
      {children}
    </motion.div>
  );
}
