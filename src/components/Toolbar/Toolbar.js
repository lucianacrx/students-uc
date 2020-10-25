import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import classes from './Toolbar.module.css';

const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <img src={logo} alt="Students UC Logo"/>
            </div>
            <nav>
                <ul>
                    <Link to="/">Inicio</Link>
                    <Link to="/">Agregar</Link>
                </ul>
            </nav>
        </header>
    );
};

export default toolbar;