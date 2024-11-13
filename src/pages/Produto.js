import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import gamerPro  from "../images/gamerPro.jpg";
import gamer from "../images/gamer.png";
import trabalho from "../images/trabalho.png";

function ProdutoDetalhado() {
  const { id } = useParams();
  const produtos = [
    {
      id: 1,
      nome: "Computador Gamer",
      descricao: "Um poderoso computador gamer, perfeito para jogos de alta performance como o Minecraft.",
      preco: "R$ 10.000,00",
      imagem: gamerPro, 
      especificacoes: [
        "Processador: Intel i9 12ª geração",
        "Memória: 32GB RAM",
        "Placa de Vídeo: NVIDIA RTX 3080",
        "Armazenamento: 1TB SSD",
        "Sistema Operacional: Windows 11"
      ]
    },
    {
      id: 2,
      nome: "Computador Para Trabalho",
      descricao: "Um poderoso computador ideal para você que utiliza Excel!",
      preco: "R$ 900,00",
      imagem: trabalho, 
      especificacoes: [
        "Processador: Intel i9 1ª geração",
        "Memória: 2GB RAM",
        "Placa de Vídeo: NVIDIA RTX 3080",
        "Armazenamento: 1TB SSD",
        "Sistema Operacional: Windows 2"
      ]
    },
    {
      id: 3,
      nome: "Computador Gamer Pro Max",
      descricao: "Um poderoso computador ideal para jogar Valorant a madrugada inteira!",
      preco: "R$ 12.000,00",
      imagem: gamer, 
      especificacoes: [
        "Processador: Intel i9 18ª geração",
        "Memória: 200GB RAM",
        "Placa de Vídeo: NVIDIA RTX 3080",
        "Armazenamento: 1TB SSD",
        "Sistema Operacional: Windows 15"
      ]
    },
  ];

  const produto = produtos.find((p) => p.id === parseInt(id));

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <section className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row">
          <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800">{produto.nome}</h2>
            <p className="mt-4 text-lg text-gray-600">{produto.descricao}</p>
            <p className="mt-6 text-2xl font-semibold text-blue-600">{produto.preco}</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Especificações:</h3>
              <ul className="list-disc pl-6 mt-2">
                {produto.especificacoes.map((especificacao, index) => (
                  <li key={index} className="text-gray-600">{especificacao}</li>
                ))}
              </ul>
            </div>
            
            <Link to="/carrinho">
               <button className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                Comprar Agora
                </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProdutoDetalhado;
