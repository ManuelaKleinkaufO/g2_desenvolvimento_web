import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Confirmacao() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="flex-grow py-20 text-center">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800">Compra Confirmada!</h2>
          <p className="mt-4 text-lg text-gray-600">Obrigado pela sua compra! Em breve você receberá um e-mail com os detalhes.</p>
          <p className="mt-6 text-xl font-semibold text-blue-600">Total: R$ 10.900,00</p>
          <div className="mt-6">
          <Link to="/">
            <button className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
              Voltar para a loja
            </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Confirmacao;
