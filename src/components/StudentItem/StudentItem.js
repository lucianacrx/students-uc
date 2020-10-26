import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import classes from './StudentItem.module.css';

const studentItem = (props) => {
    // TODO: Switch logo for student pic
    return (
        <div className={classes.StudentItem}>
            <img src={logo} alt="Student avatar" />
            <div>
            <Link><h5>{props.student.firstName} {props.student.lastName}</h5></Link>
                <p className="mb-0">Matrícula: {props.student.studentId}</p>
            </div>
        </div>
    );
};

export default studentItem;