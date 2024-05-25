import * as React from "react"
import Navbar from "../components/navbar"

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}


const ProjectsPage = () => {
    return (
        <div class="text-xl" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10vh 20vw"}}>
        <h1 style={{ display: "block", fontSize: "20px", textDecoration: "underline"}}>
            Rustam Mamedov
        </h1>
        <Navbar />
        <div class="text-lg" style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "50vw" }}>
          <p style={{margin: "20px"}}>
            <ul>
              <li>
                <h1 style={linkStyle}><a href="https://github.com/nollum/risc-v-core">RISC-V Core</a></h1>
                <p>A mini RISC-V core according to the RV32I spec, supporting R-type arithmetic instructions, lw, sw, and branching.</p> 
              </li>
              <li>
                <h1 style={linkStyle}><a href="https://github.com/nollum/micro-scheme">Micro Scheme</a></h1>
                <p>A small scheme/s-expression interpreter</p>
              </li>
              <li>
                <h1 style={linkStyle}><a href="https://github.com/nollum/spry">Spry</a></h1>
                <p>A Kanban-style project management tool. Modeled after the Trello web application.</p>
              </li> 
            </ul>
            
          </p>
        </div>
    </div>
    );
  };
  
  
export default ProjectsPage
  
export const Head = () => <title>Projects Page</title>