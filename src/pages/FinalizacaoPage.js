import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinalizacaoPage() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setProdutos(carrinho);
  }, []);

  const finalizarCompra = () => {
    localStorage.removeItem("carrinho");
    alert("Compra finalizada com sucesso!");
    navigate("/produtos");
  };

  const total = produtos.reduce((acc, prod) => acc + prod.preco, 0);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Resumo da Compra</h1>

      {produtos.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="mb-4">
            {produtos.map((produto, index) => (
              <li key={index} className="border-b py-2">
                {produto.nome} - R$ {produto.preco.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-lg mb-4">Total: R$ {total.toFixed(2)}</p>
          <button
            onClick={finalizarCompra}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          >
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
}
