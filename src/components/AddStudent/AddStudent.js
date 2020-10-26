import React from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../../services/student.service';
import { useInput } from '../../hooks/useInput';

const AddStudent = () => {
    const { value: name, bind: bindName, reset: resetName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: birthday, bind: bindBirthday, reset: resetBirthday } = useInput('');
    const { value: gender, bind: bindGender, reset: resetGender } = useInput('');
    const { value: studentId, bind: bindStudentId, reset: resetStudentId } = useInput('');
    const { value: career, bind: bindCareer, reset: resetCarreer } = useInput('');
    const { value: phone, bind: bindPhone, reset: resetPhone } = useInput('');

    const add = () => {
        const student = {
            name: name,
            lastName: lastName,
            birthday: birthday,
            gender: gender,
            studentId: studentId,
            career: career,
            phone: phone
        };

        StudentService.create(student)
            .then(response => {
                resetName();
                resetLastName();
                resetBirthday();
                resetGender();
                resetStudentId();
                resetCarreer();
                resetPhone();
                this.props.history.push("/");
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container-fluid px-5 mt-4">
            <h2>Agregar estudiante</h2>
            <hr className="Divider"/>

            <form>
                <div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label"><strong>Nombre:</strong></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" {...bindName} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label"><strong>Apellido:</strong></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="lastName" {...bindLastName} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label"><strong>Fecha de nacimiento:</strong></label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="birthday" {...bindBirthday} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="gender" className="col-sm-2 col-form-label"><strong>Sexo:</strong></label>
                        <div className="col-sm-10">
                            <input type="text" maxLength="1" className="form-control" id="gender" {...bindGender} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="studentId" className="col-sm-2 col-form-label"><strong>Matrícula:</strong></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="studentId" {...bindStudentId} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="carrer" className="col-sm-2 col-form-label"><strong>Carrera:</strong></label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="carrer" {...bindCareer} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label"><strong>Teléfono:</strong></label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="phone" {...bindPhone} />
                        </div>
                    </div>
                </div>
            </form>

            <div className="mt-4 float-right">
                <Link to="/">
                    <button type="button" className="btn btn-secondary mr-4">Cancelar</button>
                </Link>
                <button type="button" className="btn btn-primary" onClick={add}>Guardar</button>
            </div>
        </div>
    );
};

export default AddStudent;