import React from "react"
import "./footer.css"

const Footer = () => {
    return (<div id="footer">
        <div>
            <ul>
                <li><a href={"/about#about"}>O nás</a></li>
                <li><a href={"/about#contact"}>Kontakt</a></li>
                <li><a href={"/about#company"}>Sídlo</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href={"/about#services"}>Služby</a></li>
                <li><a href={"/search"}>Výpujčka aut</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href={"/about#news"}>Novinky</a></li>
                <li><a href={"/about#socmedia"}>Sociální sítě</a></li>
            </ul>
        </div>
    </div>)
}

export default Footer;