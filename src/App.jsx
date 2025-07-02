import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

export default function App() {
  return (
    <div className="width-1/2">
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}
