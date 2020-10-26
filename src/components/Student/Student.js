import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Student.module.css';
import StudentService from '../../services/student.service';
import { useInput } from '../../hooks/useInput';

const Student = (props) => {
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: birthDate, bind: bindBirthDate, reset: resetBirthDate } = useInput('');
    const { value: gender, bind: bindGender, reset: resetGender } = useInput('');
    const { value: collageCareer, bind: bindCollageCareer, reset: resetCollageCareer } = useInput('');
    const { value: phoneNumber, bind: bindPhoneNumber, reset: resetPhoneNumber } = useInput('');
    const [ currentStudent, setCurrentStudent ] = useState({});

    useEffect(() => {    
          StudentService.get(props.match.params.id)
            .then(response => {
                setCurrentStudent(response.data);
            });
    }, [props.match.params.id]);

    const edit = () => {
        const student = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            gender: gender,
            collageCareer: collageCareer,
            phoneNumber: phoneNumber
        }

        StudentService.update(props.match.params.id, student)
            .then(response => {
                resetFirstName();
                resetLastName();
                resetBirthDate();
                resetGender();
                resetCollageCareer();
                resetPhoneNumber();
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteStudent = () => {
        StudentService.delete(props.match.params.id)
            .then(response => {
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container-fluid px-5 mt-4">
            <h2>Detalle de estudiante</h2>
            <hr className={classes.Divider}/>
            {
                currentStudent ? 
                <form>
                    <div className={classes.InfoContainer}>
                        <div className={classes.Column}>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label"><strong>Nombre:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={currentStudent.firstName} id="firstName" {...bindFirstName} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-sm-2 col-form-label"><strong>Apellido:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={currentStudent.lastName} id="lastName" {...bindLastName} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="birthDate" className="col-sm-2 col-form-label"><strong>Fecha de nacimiento:</strong></label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="birthDate" value={currentStudent.birthDate} {...bindBirthDate} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="gender" className="col-sm-2 col-form-label"><strong>Sexo:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" maxLength="1" className="form-control" value={currentStudent.gender} id="gender" {...bindGender} />
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.Column}>
                            <div className="form-group row">
                                <label htmlFor="studentId" className="col-sm-2 col-form-label"><strong>Matrícula:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="studentId" value={currentStudent.studentId} readOnly />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="collageCareer" className="col-sm-2 col-form-label"><strong>Carrera:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="collageCareer" value={currentStudent.collageCareer} {...bindCollageCareer} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label"><strong>Teléfono:</strong></label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form-control" id="phone" value={currentStudent.phone} {...bindPhoneNumber} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form> : null
            }

            <div className="mt-4">
                <Link to="/">
                    <button type="button" className="btn btn-secondary mr-4">Volver</button>
                </Link>
                <button type="button" className="btn btn-danger mr-4" onClick={deleteStudent}>Eliminar</button>
                <button type="button" className="btn btn-primary" onClick={edit}>Guardar</button>
            </div>
        </div>
    );
};

export default Student;