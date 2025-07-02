import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Nav from "./Nav";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#d62828] flex flex-col">
      {/* Navigation */}

      {/* Main Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center px-8 py-8">
        {/* Spline Robot */}
        <div className="flex justify-center">
          <div className="w-full ">
            <Spline scene="https://prod.spline.design/SgHNMs38LD3EoxSH/scene.splinecode" />
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center md:text-left space-y-6 items-center"
        >
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Hey, I'm Abdalla
          </h1>
          <p className="text-lg opacity-90 max-w-md mx-auto md:mx-0">
            A passionate Web Developer, constantly learning and creating clean,
            user-friendly interfaces that blend functionality with visual
            appeal.{" "}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="mt-4 px-6 py-2 bg-white text-[#d62828] rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <a href="mailto:abdallazubaidi7@gmail.com"> Let’s Connect</a>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
