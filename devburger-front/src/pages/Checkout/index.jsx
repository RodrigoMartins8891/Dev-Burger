import { useCart } from '../../hooks/useCart';
import { api } from '../../api/api';

export function Checkout() {
    const { cart, clearCart } = useCart();

    const total = cart.reduce(
        (acc, item) => acc + item.valor * item.quantidade,
        0
    );

    async function handleFinishOrder() {
        try {
            await api.post('/pedidos', {
                itens: cart.map(item => ({
                    produto_id: item.id,
                    quantidade: item.quantidade
                }))
            });

            alert('Pedido realizado com sucesso! 🍔🔥');
            clearCart();

        } catch (error) {
            console.error(error.response?.data || error);
            alert('Erro ao finalizar pedido');
        }
    }

    if (cart.length === 0) {
        return <h2>Seu carrinho está vazio</h2>;
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Checkout 🧾</h1>

            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.nome} x {item.quantidade} — R$ {(item.valor * item.quantidade).toFixed(2)}
                    </li>
                ))}
            </ul>

            <h2>Total: R$ {total.toFixed(2)}</h2>

            <button onClick={handleFinishOrder}>
                Finalizar Pedido
            </button>
        </div>
    );
}
