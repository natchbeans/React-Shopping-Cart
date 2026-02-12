//homepage component
import '../components/Homepage.css'

export default function Homepage(){

    return (
        <div className="homepage-container">
            <nav className="header">
                <h4 className="website-name">Mock Website</h4>
                <ul className="header-list">
                    <li>Homepage</li>
                    <li>Shopping</li>
                </ul>
            </nav>
            <button type="submit" className="website-button">Enter</button>

        </div>
    );
}