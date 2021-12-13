import React from "react";
import "./Accordion.css";

const Accordion = ({title, active, setActive, maintext} ) =>{
    return ( 
        <div className = "accordion">
            <div className = "accordionHeading">
                <div className = "container">
                    <p>{title}</p>
                    <span onClick = { () => setActive(title)}>
                        {active === title ? "❎" : "✅"}
                    </span>
                </div>
            </div>
            <div className = {(active === title ? "show" : "") + " accordionContent"}>
                <div className = "container">
                    <p>{maintext}</p>
                </div>
            </div>
        </div>
    );
}
export default Accordion;