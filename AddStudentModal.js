import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddStudentRow = ({ onAdd }) => {
    const [newStudent, setNewStudent] = useState({ second_name: '', name: '', age: '', aver_mark: '' });

    const handleAddClick = () => {
        onAdd(newStudent);
        setNewStudent({ second_name: '', name: '', age: '', aver_mark: '' });
    };

    return (
        <tr>
            <td>
                <Form.Control
                    type="text"
                    placeholder="Фамилия"
                    value={newStudent.second_name}
                    onChange={(e) => setNewStudent({ ...newStudent, second_name: e.target.value })}
                />
            </td>
            <td>
                <Form.Control
                    type="text"
                    placeholder="Имя"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
            </td>
            <td>
                <Form.Control
                    type="text"
                    placeholder="Возраст"
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                />
            </td>
            <td>
                <Form.Control
                    type="text"
                    placeholder="Средний балл"
                    value={newStudent.aver_mark}
                    onChange={(e) => setNewStudent({ ...newStudent, aver_mark: e.target.value })}
                />
            </td>
            <td>
                <Button variant="success" onClick={handleAddClick}>
                    Добавить
                </Button>
            </td>
        </tr>
    );
};

export default AddStudentRow;
