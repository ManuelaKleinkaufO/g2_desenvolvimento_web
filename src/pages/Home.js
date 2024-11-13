import React from "react";
import Banner from "../components/Banner";
import CardProduto from "../components/CardProdutos";
import Footer from "../components/Footer";
import gamerPro  from "../images/gamerPro.jpg"
import gamer from "../images/gamer.png"
import trabalho from "../images/trabalho.png"

function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Computador Gamer",
      descricao: "Roda somente minecraft",
      preco: 10000,
      imagem: `${gamerPro}`
    },
    {
      id: 2,
      nome: "Computador de trabalho",
      descricao: "Nesse abre o Excel",
      preco: 900,
      imagem: `${trabalho}`
    },
    {
      id: 3,
      nome: "Computador Gamer Pro Max",
      descricao: "Roda minecraft e valorant",
      preco: 12000,
      imagem: `${gamer}`
    },
  ];

  return (
    <div className="bg-gray-200">
      <Banner />
      <section id="produtos" className="container mx-auto py-10 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Promoções</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
