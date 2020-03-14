import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Header(){
    return(
        <header>
            <img className='logo'></img>
            <nav className="buttons">
            <Link to='/'><button>DASHBOARD</button></Link>
            <Link to='/form'><button>ADD INVENTORY</button></Link>
            </nav>
        </header>
    )
}

export default withRouter(Header);