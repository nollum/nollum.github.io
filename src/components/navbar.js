import * as React from "react"

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const Navbar = () => {
    return (
      <nav style={{ display: "flex", flexDirection: "row", justifyContent: "center", columnGap: "10px"}}>
        <a href="/" style={linkStyle}>
          Home
        </a>
        <a href="/blog" style={linkStyle}>
          Blog
        </a>
        <a href="/projects" style={linkStyle}>
          Projects
        </a>
      </nav>
    );
  };

export default Navbar;