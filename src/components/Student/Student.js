import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Student.module.css';
import StudentService from '../../services/student.service';
import { useInput } from '../../hooks/useInput';

const Student = (props) => {
    const { value: firstName, setValue: setFirstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, setValue: setLastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: birthDate, setValue: setBirthDate, bind: bindBirthDate, reset: resetBirthDate } = useInput('');
    const { value: gender, setValue: setGender, bind: bindGender, reset: resetGender } = useInput('');
    const { value: studentId, setValue: setStudentId, bind: bindStudentId } = useInput('');
    const { value: address, setValue: setAddress } = useInput('');
    const { value: collageCareer, setValue: setCollageCareer, bind: bindCollageCareer, reset: resetCollageCareer } = useInput('');
    const { value: phoneNumber, setValue: setPhoneNumber, bind: bindPhoneNumber, reset: resetPhoneNumber } = useInput('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {    
          StudentService.get(props.match.params.id)
            .then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setBirthDate(response.data.birthDate);
                setGender(response.data.gender);
                setCollageCareer(response.data.collageCareer);
                setAddress(response.data.address);
                setPhoneNumber(response.data.phoneNumber);
                setStudentId(response.data.studentId);
                setLoaded(true);
            });
    }, [props.match.params.id]);

    const edit = () => {
        const student = {
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            gender: gender,
            collageCareer: collageCareer,
            phoneNumber: phoneNumber,
            studentId: studentId,
            address: address
        }

        StudentService.update(props.match.params.id, student)
            .then(response => {
                resetFirstName();
                resetLastName();
                resetBirthDate();
                resetGender();
                resetCollageCareer();
                resetPhoneNumber();
                props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteStudent = () => {
        StudentService.delete(props.match.params.id)
            .then(response => {
                props.history.push("/");
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
                loaded ? 
                <form>
                    <div className={classes.InfoContainer}>
                        <div className={classes.Column}>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-sm-2 col-form-label"><strong>Nombre:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={firstName} id="firstName" {...bindFirstName} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-sm-2 col-form-label"><strong>Apellido:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" value={lastName} id="lastName" {...bindLastName} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="birthDate" className="col-sm-2 col-form-label"><strong>Fecha de nacimiento:</strong></label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="birthDate" value={birthDate} {...bindBirthDate} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="gender" className="col-sm-2 col-form-label"><strong>Sexo:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" maxLength="1" className="form-control" value={gender} id="gender" {...bindGender} />
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.Column}>
                            <div className="form-group row">
                                <label htmlFor="studentId" className="col-sm-2 col-form-label"><strong>Matrícula:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="studentId" value={studentId} readOnly {...bindStudentId} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="collageCareer" className="col-sm-2 col-form-label"><strong>Carrera:</strong></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="collageCareer" value={collageCareer} {...bindCollageCareer} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label"><strong>Teléfono:</strong></label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form-control" id="phone" value={phoneNumber} {...bindPhoneNumber} />
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