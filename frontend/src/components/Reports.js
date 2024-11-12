// src/components/Reports.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import axios from 'axios';

const Reports = () => {
    const { state } = useLocation();
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        if (state?.student?.id) {
            axios.get(`http://localhost:5000/evaluations/${state.student.id}`)
                .then(response => setEvaluations(response.data))
                .catch(error => alert('Erro ao buscar avaliações.'));
        }
    }, [state]);

    const generatePDF = () => {
        const doc = new jsPDF('landscape');
        doc.text(`Relatório de Avaliações de ${state?.student?.name}`, 20, 20);
        doc.save(`relatorio_${state?.student?.name}.pdf`);
    };

    return (
        <div>
            <h2>Relatório de {state?.student?.name}</h2>
            <button onClick={generatePDF}>Baixar PDF</button>
        </div>
    );
};

export default Reports;
