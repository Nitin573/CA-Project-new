import Home4 from '../components/Fund/Home4'
import Home5 from "../components/Fund/Home5"
import Home3 from "../components/Home3"
import Customer from "../components/Customers";
import Home6 from '../components/Fund/Home6';
import Navbar_AL from '../components/Navbar_AL';


export default function Fund() {
    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);

    return (
        <>
            <Navbar_AL/>
            <Home3></Home3>
            <Home4></Home4>
            <Home5></Home5>
            <Home6/>
            <Customer></Customer>
        </>
    )
}
