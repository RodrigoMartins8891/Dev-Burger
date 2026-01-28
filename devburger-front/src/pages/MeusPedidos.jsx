import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export function MeusPedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function carregarPedidos() {
        try {
            const response = await api.get('/pedidos');
            setPedidos(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarPedidos();

        // 🔥 ESCUTA EVENTO DO BACK
        socket.on('pedido-status-atualizado', (pedidoAtualizado) => {
            console.log('📡 EVENTO RECEBIDO NO FRONT:', pedidoAtualizado);

            setPedidos((prev) =>
                prev.map((p) =>
                    p.id === pedidoAtualizado.id
                        ? { ...p, status: pedidoAtualizado.status }
                        : p
                )
            );
        });


        return () => {
            socket.off('pedido-status-atualizado');
        };
    }, []);

    if (loading) {
        return <p>Carregando pedidos...</p>;
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Meus Pedidos 📦</h1>

            {pedidos.length === 0 && <p>Nenhum pedido encontrado.</p>}

            <ul>
                {pedidos.map(pedido => (
                    <li key={pedido.id} style={{ marginBottom: 16 }}>
                        <strong>Pedido #{pedido.id}</strong><br />
                        Status: {pedido.status}<br />
                        Total: R$ {pedido.total}<br />
                        Data: {new Date(pedido.criado_em).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
