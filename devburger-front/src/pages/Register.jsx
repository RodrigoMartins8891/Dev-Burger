import { useState } from 'react';
import { api } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        try {
            await api.post('/auth/register', {
                nome,
                email,
                senha
            });

            alert('Cadastro realizado com sucesso!');
            navigate('/');
        } catch (err) {
            alert('Erro ao cadastrar');
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h1>Cadastro</h1>

            <input
                placeholder="Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />

            <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
            />

            <p>
                Já tem conta? <Link to="/login">Faça login</Link>
            </p>
            
            <button type="submit">Cadastrar</button>
        </form>
    );
}
