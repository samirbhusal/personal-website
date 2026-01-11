import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="logo"
        style={({ isActive }) => ({
          color: isActive ? "#F08080" : "black",
        })}
      >
        Samir
      </NavLink>

      <ul>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? "#F08080" : "black",
            })}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#F08080" : "black",
            })}
          >
            Contact
          </NavLink>
          {/* <a href="#contact">Contact</a> */}
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
