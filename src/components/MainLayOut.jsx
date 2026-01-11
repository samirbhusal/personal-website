import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";

export default function MainLayOut() {
  return (
    <>
      <ScrollRestoration />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>© 2025 Samir — Built with ❤️ using React & Vite</footer>
    </>
  );
}
