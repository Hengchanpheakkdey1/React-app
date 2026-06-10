// Import React (needed for JSX)
import React from "react";

// Arrow function component — no useState, beginner friendly
const Navbar = () => {
    return (
        // nav is the HTML element for navigation
        <nav style={styles.nav}>

            {/* Logo / Brand name */}
            <div style={styles.logo}>MyApp</div>

            {/* Navigation links */}
            <ul style={styles.links}>
                <li><a href="#" style={styles.link}>Home</a></li>
                <li><a href="#" style={styles.link}>About</a></li>
                <li><a href="#" style={styles.link}>Services</a></li>
                <li><a href="#" style={styles.link}>Contact</a></li>
            </ul>

        </nav>
    );
};

// Export so other files can use this component
export default Navbar;

// Styles object — like CSS but written in JavaScript
const styles = {
    nav: {
        display: "flex",             // place items in a row
        alignItems: "center",        // center items vertically
        justifyContent: "space-between", // logo left, links right
        padding: "0 24px",
        height: "60px",
        backgroundColor: "#1a1a2e", // dark background
        color: "#fff",              // white text
    },
    logo: {
        fontSize: "1.4rem",
        fontWeight: "bold",
    },
    links: {
        listStyle: "none",  // remove bullet points
        display: "flex",    // links side by side
        gap: "24px",        // space between links
        margin: 0,
        padding: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none", // remove underline
        fontSize: "0.95rem",
    },
};