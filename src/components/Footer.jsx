import { Link } from "react-router-dom";
import Blue from './Blue'
import Red from './Red';
import Home from './Home';
export default function Footer() {
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/Blue">Blue</Link>
            <Link to="/Red">Red</Link>
        </footer>
    );

}