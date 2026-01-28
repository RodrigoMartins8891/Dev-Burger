import { useEffect, useState } from 'react';
import { api } from '../api/api';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export function AdminPedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    async function carregarPedidos() {
        try {
            const response = await api.get('/pedidos/admin/todos');
            setPedidos(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function atualizarStatus(id, status) {
        try {
            await api.patch(`/pedidos/${id}/status`, { status });
        } catch (err) {
            console.error(err);
            alert('Erro ao atualizar status');
        }
    }

    useEffect(() => {
        carregarPedidos();

        // 🔥 escuta atualização em tempo real
        socket.on('pedido-status-atualizado', (pedidoAtualizado) => {
            setPedidos(prev =>
                prev.map(p =>
                    p.id === pedidoAtualizado.id ? pedidoAtualizado : p
                )
            );
        });

        return () => socket.off('pedido-status-atualizado');
    }, []);

    if (loading) return <p>Carregando pedidos...</p>;

    return (
        <div style={{ padding: 20 }}>
            <h1>📊 Painel Admin — Pedidos</h1>

            {pedidos.map(pedido => (
                <div
                    key={pedido.id}
                    style={{
                        border: '1px solid #ccc',
                        padding: 16,
                        marginBottom: 16,
                        borderRadius: 8
                    }}
                >
                    <strong>Pedido #{pedido.id}</strong><br />
                    Cliente: {pedido.usuario_nome}<br />
                    Status: <b>{pedido.status}</b><br />
                    Total: R$ {pedido.total}<br />

                    <div style={{ marginTop: 10 }}>
                        <button onClick={() => atualizarStatus(pedido.id, 'RECEBIDO')}>
                            Recebido
                        </button>{' '}
                        <button onClick={() => atualizarStatus(pedido.id, 'EM_PREPARO')}>
                            Em preparo
                        </button>{' '}
                        <button onClick={() => atualizarStatus(pedido.id, 'ENVIADO')}>
                            Enviado
                        </button>{' '}
                        <button onClick={() => atualizarStatus(pedido.id, 'FINALIZADO')}>
                            Finalizado
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
