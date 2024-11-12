// src/components/Evaluations.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Evaluations = () => {
    const { state } = useLocation();
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        if (state?.student?.id) {
            axios.get(`http://localhost:5000/evaluations/${state.student.id}`)
                .then(response => setEvaluations(response.data))
                .catch(error => alert('Erro ao buscar avaliações.'));
        }
    }, [state]);

    return (
        <div>
            <h2>Avaliações de {state?.student?.name}</h2>
            {evaluations.map((evalItem, index) => (
                <div key={index}>
                    <p>Data: {evalItem.data}</p>
                    <p>Peso: {evalItem.peso} kg</p>
                    {/* Adicionar os campos desejados */}
                </div>
            ))}
        </div>
    );
};

export default Evaluations;
