import { motion } from "framer-motion";

export default function Nav() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex justify-center gap-4 text-white bg-[#6b2c39] p-4 rounded-full"
      >
        <p>Home</p>
        <p>Projects</p>
        <p>Contact</p>
      </motion.div>
    </>
  );
}
