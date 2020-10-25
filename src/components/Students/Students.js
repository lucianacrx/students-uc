import React from 'react';
import logo from '../../assets/images/logo.png';
import classes from './Students.module.css';

const students = () => {
    return (
        <div className="container-fluid mx-5 mt-4">
            <h2>Listado de estudiantes - Proyecto 2</h2>
            <hr className={classes.Divider}/>
            <div className={classes.GridContainer}>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
                <div className={classes.UserItem}>
                    <img src={logo} alt="Student avatar" />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae.
                </div>
            </div>
        </div>      
    );
};

export default students;