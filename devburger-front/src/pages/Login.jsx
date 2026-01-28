import { useState } from 'react';
import { api } from "../api/api";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/auth/login', {
                email,
                senha
            });

            const token = response.data.token;
            localStorage.setItem('token', token);

            // 🔥 DECIDE PRA ONDE IR
            const usuario = jwtDecode(token);

            if (usuario.is_admin) {
                navigate('/admin/pedidos');
            } else {
                navigate('/home');
            }

        } catch (err) {
            alert('Login inválido');
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>

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

            <button type="submit">Entrar</button>
        </form>
    );
}
