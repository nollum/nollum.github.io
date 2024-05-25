import * as React from "react"
import Navbar from "../components/navbar"

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const IndexPage = () => {
  return (
    <div class="text-xl" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10vh 20vw"}}>
        <h1 style={{ display: "block", textDecoration: "underline"}}>
            Rustam Mamedov
        </h1>
        <Navbar />
        <div class="text-lg" style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "50vw" }}> 
          <p style={{margin: "20px"}}>
            My name is Rustam. I'm a recent Computer Science graduate from the University of Western Ontario. I like to build things. 
            I am primarily interested in distributed computing, embedded systems, and cybersecurity. I also like to dabble in web development every now and again.
          </p>
          <p style={{margin: "0 20px"}}>
            You can check out some of the recent projects that I've worked on <a style={{color: "#8954A8", fontWeight: "bold"}} href="/projects">here</a>, and for a more up to date list you can visit my <a style={{color: "#8954A8", fontWeight: "bold"}} href="https://github.com/nollum/">GitHub</a>. Also, feel free to connect with me on <a style={{color: "#8954A8", fontWeight: "bold"}} href="https://www.linkedin.com/in/mamedovrustam/">LinkedIn</a>.
          </p>
        </div>
    </div>
  );
};


export default IndexPage

export const Head = () => <title>Home Page</title>
