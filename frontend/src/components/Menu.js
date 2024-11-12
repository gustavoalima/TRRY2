import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUsers, FiLogOut, FiFileText, FiClipboard } from 'react-icons/fi'; // Ícones adicionais

function Menu() {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e0f7fa', // Azul claro
            fontFamily: 'Arial, sans-serif',
        },
        content: {
            textAlign: 'center',
        },
        header: {
            fontSize: '36px',
            marginBottom: '40px',
            color: '#00796b', // Azul-escuro
            fontWeight: '600',
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            flexWrap: 'wrap',
            padding: '0 20px',
        },
        card: {
            backgroundColor: '#4db6ac', // Cor verde-azulada
            padding: '35px 25px',
            borderRadius: '12px',
            width: '200px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '18px',
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
            transform: hoveredCard ? 'scale(1.07)' : 'scale(1)',
            boxShadow: hoveredCard ? '0px 15px 25px rgba(0, 0, 0, 0.15)' : '0px 10px 20px rgba(0, 0, 0, 0.1)',
        },
        exitCard: {
            backgroundColor: '#ef5350', // Vermelho vibrante
        },
        icon: {
            fontSize: '40px',
            marginBottom: '15px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.header}>Menu Principal</h1>
                <div style={styles.cardContainer}>
                    {/* Cartão Gerenciamento de Alunos */}
                    <div
                        style={styles.card}
                        onClick={() => navigate('/students')}
                        onMouseEnter={() => setHoveredCard('students')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <FiUsers style={styles.icon} />
                        Gerenciar Alunos
                    </div>

                    {/* Cartão Avaliação */}
                    <div
                        style={styles.card}
                        onClick={() => navigate('/evaluations')}
                        onMouseEnter={() => setHoveredCard('evaluations')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <FiClipboard style={styles.icon} />
                        Avaliação
                    </div>

                    {/* Cartão Relatórios */}
                    <div
                        style={styles.card}
                        onClick={() => navigate('/reports')}
                        onMouseEnter={() => setHoveredCard('reports')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <FiFileText style={styles.icon} />
                        Relatórios
                    </div>

                    {/* Cartão Sair */}
                    <div
                        style={{ ...styles.card, ...styles.exitCard }}
                        onClick={() => alert('Saindo...')}
                        onMouseEnter={() => setHoveredCard('exit')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <FiLogOut style={styles.icon} />
                        Sair
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
