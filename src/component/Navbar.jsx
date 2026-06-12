import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyApp</div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/product" style={styles.link}>
          Products
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: "60px",
    backgroundColor: "#1a1a2e",
    color: "#fff",
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
};
