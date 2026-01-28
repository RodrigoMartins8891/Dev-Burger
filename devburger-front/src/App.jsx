import { useEffect, useState } from 'react';
import { api } from './api/api';
import { useCart } from './hooks/useCart';
import { Link } from 'react-router-dom';

function App() {
  const [produtos, setProdutos] = useState([]);
  const { cart, addProduct } = useCart();
  console.log(cart);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get('/produtos');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos', error);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>DevBurger 🍔</h1>

      <Link to="/carrinho">
        <button>Ir para o Carrinho 🛒</button>
      </Link>
      <Link to="/meus-pedidos">
        <button>Meus Pedidos 📦</button>
      </Link>
      {produtos.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {produtos.map(produto => (
            <li key={produto.id} style={{ marginBottom: 20 }}>
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{
                  width: 150,
                  height: 150,
                  objectFit: 'cover',
                  borderRadius: 8
                }}
              />

              <h3>{produto.nome}</h3>
              <p>R$ {produto.valor}</p>

              <button onClick={() => addProduct(produto)}>
                Adicionar
              </button>
            </li>
          ))}


        </ul>
      )}

    </div>
  );
}

export default App;
