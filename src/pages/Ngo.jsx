import Home4 from '../components/Ngo/Home4'
import Home5 from "../components/Ngo/Home5"
import Home6 from "../components/Ngo/Home6"
import Customer from "../components/Customers";
import Navbar_AL from '../components/Navbar_AL';


export default function Ngo() {

    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);
    return (
        <>
            <Navbar_AL/>
            <Home4></Home4>
            <Home5></Home5>
            <Home6></Home6>
            <Customer></Customer>
        </>
    )
}
