import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Meu E-commerce</h1>
      <nav className="space-x-4">
        <Link to="/produtos" className="hover:underline">Produtos</Link>
        <Link to="/carrinho" className="hover:underline">Carrinho</Link>
        <button onClick={handleLogout} className="hover:underline">Sair</button>
      </nav>
    </header>
  );
}
