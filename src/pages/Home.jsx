import React from 'react'
import Home1 from "../components/Home1"
import Home12 from "../components/Home12"
import Home2 from "../components/Home2"
import Home3 from "../components/Home3"
import Navbar_AL from '../components/Navbar_AL'


export default function Home() {

    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);

    return (
        <>
            <Navbar_AL/>
            <Home1 />
            <Home12 />
            <Home2 />
            <Home3 />
        </>
    );
};
