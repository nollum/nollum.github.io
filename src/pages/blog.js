import * as React from "react"
import Navbar from "../components/navbar"

const BlogPage = () => {
    return (
        <div class="text-lg" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10vh 20vw"}}>
        <h1 style={{ display: "block", fontSize: "20px", textDecoration: "underline"}}>
            Rustam Mamedov
        </h1>
        <Navbar />
        <div class="text-lg" style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "50vw" }}>
          <p style={{margin: "20px"}}>
            Nothing here yet.
          </p>
        </div>
    </div>
    );
  };
  
  
export default BlogPage
  
export const Head = () => <title>Blog Page</title>