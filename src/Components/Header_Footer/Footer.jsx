import React from "react";
import "./Footer.css";
import heartbeat from "./heart-beat.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";


export default function Footer() {
    return (
        <div>
            <div className="container footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img  alt="heartlogo" className = "heartb" src = {heartbeat}></img>
                        </a>
                        <span className="text-muted">© 2021 IO.CLINIC, Mila Kuzmich company</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#twitter"><img className = "social" src = {twitter} alt="twitter"></img></a></li>
                        <li className="ms-3"><a className="text-muted" href="#instagram"><img className = "social" src = {instagram} alt="instagram"></img></a></li>
                        <li className="ms-3"><a className="text-muted" href="#facebook"><img className = "social" src = {facebook} alt="facebook"></img></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}