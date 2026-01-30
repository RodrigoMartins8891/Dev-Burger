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
      {/* HEADER */}
      <header className="app-header">
        <h1 className="logo">DevBurger 🍔</h1>

        <nav>
          <Link to="/app">Produtos</Link>
          <Link to="/meus-pedidos">Meus Pedidos</Link>
          <Link to="/carrinho">Carrinho</Link>
        </nav>
      </header>
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
