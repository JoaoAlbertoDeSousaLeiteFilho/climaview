import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';

function App() {
  // controla se estamos vendo tudo ou apenas favoritos
  const [viewFavorites, setViewFavorites] = useState(false);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            {/* passamos a função de mudar o filtro para a sidebar */}
            <Sidebar onViewChange={setViewFavorites} activeView={viewFavorites} />
          </div>

          <div className="col-md-9">
            {/* Passamos o estado atual para o Dashboard saber o que mostrar */}
            <Dashboard showOnlyFavorites={viewFavorites} />
          </div>
        </div>
      </main>

    {/* inicio do rodape*/}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          {/* a tag adress que o professor pediu*/}
          <address className="mb-0 small">
            <strong>Desenvolvido por:</strong> João Alberto de Sousa Leite Filho <br />
            <strong>Data:</strong> 13 de Abril de 2026 <br />
            Disciplina de Desenvolvimento de Software Web - Prof. Alexandre Almeida
          </address>
        </div>
      </footer>
      {/* final do rodape*/}
    </div>
  );
}

export default App;