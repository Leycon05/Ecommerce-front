import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import produtosMock from "../data/produtos.json";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtosMock);
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {produtos.map((produto) => (
          <div key={produto.id} className="border rounded shadow p-4">
            <img
              src={produto.imgUrl}
              alt={produto.nome}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{produto.nome}</h2>
            <p className="text-gray-600">{produto.descricao}</p>
            <p className="text-blue-700 font-semibold mt-1">R$ {produto.preco}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
