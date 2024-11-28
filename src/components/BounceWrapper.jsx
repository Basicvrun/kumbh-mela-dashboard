import { motion } from "framer-motion";

const BounceWrapper = ({ children }) => {
  return (
    <motion.div>
      {children}
    </motion.div>
  );
};

export default BounceWrapper;
