import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard'; 
function App() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <Dashboard />
          </div>
        </div>
      </main>

      {/* inicio do rodape*/}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          {/* A tag address que o professor exigiu */}
          <address className="mb-0 small">
            <strong>Desenvolvido por:</strong> João Alberto de Sousa Leite Filho <br />
            <strong>Data:</strong> 13 de Abril de 2026 <br />
            Disciplina de Desenvolvimento de Software Web - Prof. Alexandre Almeida
          </address>
        </div>
      </footer>
      {/* -final do rodapw */}
    </div>
  )
}

export default App;