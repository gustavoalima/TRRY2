// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Students from './components/Students';
import Evaluations from './components/Evaluations';
import Reports from './components/Reports';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/students" element={<Students />} />
                <Route path="/evaluations" element={<Evaluations />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </Router>
    );
}

export default App;
