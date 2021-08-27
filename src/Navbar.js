import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return(
        <header className="App-header">
        <nav className={classes.navbar}>
          <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
        </nav>
      </header>
    );
}
export default Navbar;