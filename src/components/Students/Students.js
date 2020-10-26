import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Students.module.css';
import StudentItem from '../StudentItem/StudentItem';
import StudentService from '../../services/student.service';

const Students = () => {
    const [ students, setStudents ] = useState([]);

    useEffect(() => {    
        StudentService.getAll()
          .then(response => {
              const students = response.data.payload;
              setStudents(students);
          });
    }, []);

    return (
        <div className="container-fluid px-5 mt-4">
            <h2>Listado de estudiantes</h2>
            <hr className="Divider"/>
            <div className={classes.GridContainer}>
                {
                    students && students.map(student => (
                        <Link to={'/' + student.id}>
                            <StudentItem student={student}/>
                        </Link>
                    ))
                }
                { students.length === 0 && 'No hay estudiantes para mostrar' }
            </div>
        </div>      
    );
};

export default Students;