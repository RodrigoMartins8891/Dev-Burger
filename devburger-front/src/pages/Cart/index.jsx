import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';

export function Cart() {
    const {
        cart,
        removeProduct,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    const total = cart.reduce((acc, item) => {
        const precoLimpo = typeof item.valor === 'string'
            ? Number(item.valor.replace(',', '.'))
            : item.valor;

        return acc + (precoLimpo * item.quantidade);
    }, 0);

    const navigate = useNavigate();

    return (
        <div style={{ padding: 20 }}>
            <h1>Carrinho 🛒</h1>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio</p>
            ) : (
                <>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} style={{ marginBottom: 20 }}>
                                <h3>{item.nome}</h3>
                                <p>Quantidade: {item.quantidade}</p>
                                <p>Preço: R$ {item.valor}</p>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                                <button onClick={() => removeProduct(item.id)}>
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h2>Total: R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>

                    <button onClick={() => navigate('/checkout')}>
                        Ir para Checkout
                    </button>

                </>


            )}
        </div>
    );
}