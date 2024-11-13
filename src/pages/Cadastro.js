import Footer from "../components/Footer";

function Cadastro(){
    return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <section className="flex-grow flex items-center justify-center ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Cadastro de Usuário
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
      );
}

export default Cadastro;