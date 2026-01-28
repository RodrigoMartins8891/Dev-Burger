import { useCart } from '../hooks/useCart';

const { cart, addProduct } = useCart();

console.log(cart);
<button onClick={() => addProduct(produto)}>
  Adicionar
</button>
