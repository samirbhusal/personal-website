export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        Samir
      </a>

      <ul>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="/Samir-Bhusal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
