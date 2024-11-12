// src/components/Students.js

import React, { useState } from 'react';
import axios from 'axios';

const Students = () => {
    const [newStudent, setNewStudent] = useState({
        name: '',
        cep: '',
        address: '',
        phone: '',
        gender: '',
        birthDate: ''
    });
    const [searchName, setSearchName] = useState('');
    const [foundStudents, setFoundStudents] = useState([]);

    // Função para cadastrar novo aluno
    const addStudent = () => {
        axios.post('http://localhost:5000/students/add', newStudent)
            .then(response => {
                alert('Aluno cadastrado com sucesso!');
                setNewStudent({ name: '', cep: '', address: '', phone: '', gender: '', birthDate: '' });
            })
            .catch(error => alert('Erro ao adicionar aluno.'));
    };

    // Função para buscar aluno por nome
    const searchStudentByName = () => {
        axios.get(`http://localhost:5000/students/search?name=${searchName}`)
            .then(response => {
                setFoundStudents(response.data);
            })
            .catch(error => {
                alert('Erro ao buscar aluno.');
                setFoundStudents([]);
            });
    };

    return (
        <div style={styles.container}>
            <h2>Cadastro de Alunos</h2>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Nome (obrigatório)"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="CEP (obrigatório)"
                    value={newStudent.cep}
                    onChange={(e) => setNewStudent({ ...newStudent, cep: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Endereço (obrigatório)"
                    value={newStudent.address}
                    onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone (obrigatório)"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                    style={styles.input}
                    required
                />
                <select
                    value={newStudent.gender}
                    onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
                    style={styles.input}
                    required
                >
                    <option value="">Gênero (obrigatório)</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <input
                    type="date"
                    placeholder="Data de Nascimento (obrigatório)"
                    value={newStudent.birthDate}
                    onChange={(e) => setNewStudent({ ...newStudent, birthDate: e.target.value })}
                    style={styles.input}
                    required
                />
                <button onClick={addStudent} style={styles.button}>Adicionar Aluno</button>
            </div>

            <h2>Buscar Aluno</h2>
            <div style={styles.searchSection}>
                <input
                    type="text"
                    placeholder="Nome do Aluno"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    style={styles.input}
                />
                <button onClick={searchStudentByName} style={styles.button}>Buscar</button>
            </div>

            {foundStudents.length > 0 ? (
                <div style={styles.result}>
                    <h3>Alunos Encontrados:</h3>
                    {foundStudents.map(student => (
                        <div key={student.id} style={styles.studentInfo}>
                            <p><strong>Nome:</strong> {student.name}</p>
                            <p><strong>Endereço:</strong> {student.address}</p>
                            <p><strong>Telefone:</strong> {student.phone}</p>
                            <p><strong>Gênero:</strong> {student.gender}</p>
                            <p><strong>Data de Nascimento:</strong> {student.birthDate}</p>
                        </div>
                    ))}
                </div>
            ) : searchName && (
                <p style={styles.noResults}>Nenhum aluno encontrado com esse nome.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: '90%',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    },
    input: {
        margin: '5px 0',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#1E90FF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    searchSection: {
        marginBottom: '20px',
    },
    result: {
        backgroundColor: '#e0f7fa',
        padding: '10px',
        borderRadius: '4px',
        marginTop: '10px',
    },
    studentInfo: {
        marginBottom: '10px',
    },
    noResults: {
        color: '#d9534f',
    },
};

export default Students;
