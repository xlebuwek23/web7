import React, {useState} from 'react';
import AddStudentModal from "./AddStudentModal";

const MainTable = ({ students, onDelete, onAdd }) => {

    const [showModal, setShowModal] = useState(false);
    const [ageFilter, setAgeFilter] = useState('');
    const handleCloseModal = () => setShowModal(false);

    const filteredStudents = students.filter((student) =>
        ageFilter ? student.age === parseInt(ageFilter, 10) : true
    );

    return (
        <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Таблица студентов</h2>
                <div className="d-flex">
                    <div className="mr-2 px-4">
                        <input
                            type="text"
                            placeholder="Фильтр по возрасту"
                            value={ageFilter}
                            onChange={(e) => setAgeFilter(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Средний балл</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.second_name}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.aver_mark}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => onDelete(student.id)}
                            >
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <AddStudentModal show={showModal} handleClose={handleCloseModal} onAdd={onAdd} />
        </div>
    );
};

export default MainTable;
