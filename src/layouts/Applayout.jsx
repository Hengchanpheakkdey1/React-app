import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

export default function Applayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h3>footer</h3>
    </div>
  );
}
