import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CottageSharpIcon from '@mui/icons-material/CottageSharp';
import AddIcon from '@mui/icons-material/Add';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import AddCommentIcon from '@mui/icons-material/AddComment';

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <Link to='/'>
                    
                        <li><a><CottageSharpIcon/> Home </a></li>
                    </Link>

                    <Link to="/registration">
                        <li><a><AppRegistrationIcon/> Register</a></li>
                    </Link>

                    <Link to='/login'>
                        <li><a><LoginIcon/> Login</a></li>
                    </Link>

                    <Link to="/add-product">
                        <li><a><AddIcon/> Add Product</a></li>
                    </Link>

                    <Link to="/review">
                        <li><a><AddCommentIcon/>Add Review</a></li>
                    </Link>

            <h1 className="navbar_logo">SparkPlugs ™</h1>
                </ul>
            </nav>

        </div>
    );
}


export default NavBar;
