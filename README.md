# 🍔 DevBurger — Sistema Full Stack de Pedidos

Projeto **Full Stack** desenvolvido para simular um sistema real de pedidos de uma hamburgueria, com **cliente**, **painel administrativo** e **atualização de status em tempo real**.

Este projeto foi construído com foco em **boas práticas**, **organização de código**, **autenticação**, **integração frontend/backend** e **experiência real de uso**.

---

## 🚀 Funcionalidades

### 👤 Cliente

* Login com autenticação JWT
* Listagem de produtos
* Carrinho de compras
* Finalização de pedido
* Visualização de pedidos realizados
* **Atualização de status em tempo real (WebSocket)**

### 🛠️ Admin

* Login administrativo
* Painel de pedidos
* Alteração do status do pedido:

  * RECEBIDO
  * EM_PREPARO
  * ENVIADO
  * FINALIZADO
* Atualização instantânea para o cliente

---

## 🧠 Tecnologias Utilizadas

### Frontend

* React
* Vite
* React Router DOM
* Axios
* Socket.io Client

### Backend

* Node.js
* Express
* MySQL
* Socket.io
* JWT (Autenticação)
* Bcrypt (Hash de senha)

---

## 🔐 Autenticação

* Autenticação baseada em **JWT**
* Controle de acesso para:

  * Usuário comum
  * Usuário administrador (`is_admin`)
* Rotas protegidas no frontend e backend

---

## 📡 Tempo Real

* Comunicação em tempo real utilizando **Socket.io**
* Evento principal:

```
pedido-status-atualizado
```

* O cliente recebe automaticamente a mudança de status sem necessidade de refresh

---

## 🗄️ Banco de Dados

Principais tabelas:

* usuarios
* produtos
* pedidos
* pedido_itens
* pedido_status_historico

---

## ▶️ Como rodar o projeto

### Backend

```bash
npm install
npm run dev
```

Configure o arquivo `.env`:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=devburger
```

### Frontend

```bash
npm install
npm run dev
```

---

## 📸 Demonstração

📹 Vídeo demonstrando:

* Painel admin alterando status
* Atualização refletindo no banco MySQL
* Atualização em tempo real no frontend

*(link ou gif pode ser adicionado aqui)*

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Prática real de um sistema full stack
* Consolidação de conceitos de backend e frontend
* Preparação para oportunidades como **Desenvolvedor Full Stack Júnior**

---

## 👨‍💻 Autor

**Rodrigo Martins**
Desenvolvedor Full Stack

* LinkedIn: *(adicione seu link aqui)*
* GitHub: *(adicione seu link aqui)*

---

🚀 Projeto em evolução — novas melhorias estão sendo implementadas continuamente.

