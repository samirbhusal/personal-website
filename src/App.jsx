import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import DownloadResume from "./components/DownloadResume";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <footer>© 2025 Samir — Built with ❤️ using React & Vite</footer>
    </>
  );
}
