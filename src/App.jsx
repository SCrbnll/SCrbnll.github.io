import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
    return (
        <div>
            <NavBar /> 
            <Banner /> 
            <Experience />
            <Projects />
        </div>
    )

};

export default App;
