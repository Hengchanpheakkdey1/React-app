import { Link } from "react-router";
import "./App.css";

export default function App() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to MyApp</h1>
        <p>Discover the best products at the best prices.</p>
        <Link to="/product" className="hero-btn">Shop Now</Link>
      </div>
    </div>
  );
}
