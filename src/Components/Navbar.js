import React, {useState} from 'react';
import '../App.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="">
                    <a>Open Funder</a>
                    </Link>
                    <Link to="/about">
                    <a>About</a>
                    </Link>
                    <Link to="/features">
                    <a>Features</a>
                    </Link>
                    <Link to="/contact">
                    <a>Contact</a>
                    </Link>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> 
                        <ReorderIcon /> 
                </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search Stock Prices" />
                <button>
                    <SearchIcon />
                </button>
                <Button
                    type="button"
                    endIcon={<ExitToAppIcon />}
                    variant="text"
                    className="button"
                >
                Login
                </Button>
            </div>
        </div>
    )
}

export default Navbar
