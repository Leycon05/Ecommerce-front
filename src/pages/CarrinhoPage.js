import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(itens);
  }, []);

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  const valorTotal = carrinho.reduce((total, item) => total + item.preco, 0);

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Carrinho</h1>
        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div className="space-y-4">
            {carrinho.map((item, index) => (
              <div
                key={index}
                className="border p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.nome}</h2>
                  <p className="text-gray-600">R$ {item.preco}</p>
                </div>
                <button
                  className="text-red-600 font-bold"
                  onClick={() => removerItem(index)}
                >
                  Remover
                </button>
              </div>
            ))}
            <div className="text-right font-bold text-lg">
              Total: R$ {valorTotal.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
