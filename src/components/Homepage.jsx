//homepage component
import '../components/Homepage.css'
import { Link } from "react-router-dom";

export default function Homepage(){

    return (
        <div className="homepage-container">
            <nav className="header">
                <h4 className="website-name">Mock Website</h4>
                <ul className="header-list">
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/shopping">Shopping</Link></li>
                </ul>
            </nav>
            <button type="submit" className="website-button">Enter</button>

        </div>
    );
}