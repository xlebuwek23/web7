import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainTable from './MainTable';
import InfoPage from './InfoPage';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, second_name:'Урусов', name: 'Глеб', age: 20, aver_mark: 4.5},
    { id: 2, second_name:'Попов', name: 'Владимир', age: 19, aver_mark: 4.7 },
  ]);

  const handleDelete = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const handleAdd = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
  };

  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
                path="/"
                element={<MainTable students={students} onDelete={handleDelete} onAdd={handleAdd} />}
            />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
