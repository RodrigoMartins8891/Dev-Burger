import { Navigate } from 'react-router-dom';

export function AdminRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" />;
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));

        if (!payload.is_admin) {
            return <Navigate to="/meus-pedidos" />;
        }

        return children;

    } catch (err) {
        console.error('Token inválido', err);
        localStorage.removeItem('token');
        return <Navigate to="/" />;
    }
}
