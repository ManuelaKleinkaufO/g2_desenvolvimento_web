import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import gamerPro  from "../images/gamerPro.jpg"
import trabalho from "../images/trabalho.png"

function Carrinho() {
  const carrinho = [
    {
      id: 1,
      nome: "Computador Gamer",
      preco: "10.000,00",
      quantidade: 1,
      imagem: `${gamerPro}`,
    },
    {
      id: 2,
      nome: "Computador Para Trabalho",
      preco: "900,00",
      quantidade: 1,
      imagem: `${trabalho}`, 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="flex-grow py-20">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800">Carrinho de Compras</h2>
          <div className="mt-6">
            {carrinho.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.imagem} alt={item.nome} className="w-32 h-32 object-cover rounded-lg" />
                <div className="flex-grow ml-4">
                  <h3 className="font-semibold text-lg">{item.nome}</h3>
                  <p className="text-gray-600">Quantidade: {item.quantidade}</p>
                </div>
                <p className="font-bold text-lg">{`R$ ${item.preco}`}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold">Total: R$ 10.900,00</h3>
            <Link to="/confirmacao">
              <button className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                Confirmar Compra
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Carrinho;
