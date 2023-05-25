import "../App.css";
import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar
        header={"Course Man => Search/Register"}
        navColor={"blurred"}
        textColor={"white"}
      />
    </div>
  );
}

export default Home;
