import { Link } from "react-router-dom";

function CardProduto({ produto }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-80 h-80 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold">{produto.nome}</h3>
      <p className="text-gray-600 mt-2">{produto.descricao}</p>
      <p className="text-black font-bold mt-4">R$ {produto.preco}</p>
      <Link
        to={`/produto/${produto.id}`}
        className="mt-6 px-4 py-2"
      >
        Ver Produto
      </Link>

      <Link to="/carrinho">
        <button className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
            Adicionar ao carrinho
        </button>
      </Link>
    </div>
  );
}

export default CardProduto;
