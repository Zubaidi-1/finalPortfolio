import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1e1f36] text-white px-6 py-12 flex flex-col items-center gap-12 justify-center">
      {/* Image at the top */}
      <img
        src="/1651928251633.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-[#d62828]"
      />

      {/* Description paragraph */}
      <div className="max-w-3xl text-center text-lg leading-relaxed">
        I’m an energy engineer with a strong passion for technology and
        problem-solving. Alongside my academic background, I’ve independently
        taught myself full-stack web development, diving deep into technologies
        like JavaScript, HTML, CSS, Tailwind CSS, Framer Motion, Node.js, MySQL,
        and Redis. This self-driven journey has sharpened my ability to learn
        quickly, build responsive and dynamic applications, and combine
        technical precision with creative thinking—skills that I bring into
        every project I work on.
      </div>

      {/* Contact icons and CV button */}
      <div className="flex gap-6 items-center text-2xl">
        <a
          href="mailto:abdallazubaidi7@gmail.com"
          className="hover:text-[#d62828] transition-colors"
          aria-label="Email"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/abdalla-zubaidi-8960b023a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d62828] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="../public/Yourcv.pdf"
          download
          className="bg-[#d62828] px-6 py-2 rounded text-white text-base hover:bg-[#a61c1c] transition-colors"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
