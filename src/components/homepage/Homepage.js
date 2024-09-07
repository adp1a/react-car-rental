import React from 'react';
import './homepage.css'

const Home = () => {
    return <div id="homepage">
        <div className="home-text">
            <h1>
                Rental App - Aplikace na vypůjčení aut
            </h1>
            <div id="content">
                Chcete vypůjčit vůz?<br />
                Začněte <a href={"/search"} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">u nás.</a>
                <div id="content-decor"></div>
            </div>
        </div>
        <div className="home-car">
            <div id="home-car-image">
                <span>
                    Sháníte auto?
                    <a href={"/search"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Vypůjčit</a>
                </span>
            </div>
        </div>
    </div>
}

export default Home;