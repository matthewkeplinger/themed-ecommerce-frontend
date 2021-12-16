import { Link } from 'react-router-dom';
import './AdminNavBar.css';


function AdminNavBar() {
    return (
        <nav className="AdminNavBar">
            <ul>
                <Link to='/'>
                    <li><a>Home</a></li>
                </Link>
                <Link to='/list-product'>
                    <li><a>List Product</a></li>
                </Link>
                <Link to='/logout'>
                    <li><a>Logout</a></li>
                </Link>
            </ul>
        </nav>
    );
}


export default AdminNavBar;
