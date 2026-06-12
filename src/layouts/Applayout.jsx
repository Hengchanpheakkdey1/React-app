import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
