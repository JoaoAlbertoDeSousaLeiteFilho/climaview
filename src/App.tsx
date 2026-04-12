import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* 1. O Cabeçalho */}
      <Navbar />
      
      {/* 2. O Container Principal */}
      <main className="container mt-4">
        
        {/* Aqui começa o Grid (a grade de 12 pedaços) */}
        <div className="row">
          
          {/* A Sidebar fica com 3 pedaços */}
          <div className="col-md-3">
            <Sidebar />
          </div>

          {/* O Conteúdo fica com os 9 pedaços restantes */}
          <div className="col-md-9">
            <section className="bg-white p-4 rounded shadow-sm h-100">
              <h2>Dashboard do Clima 🌤️</h2>
              <p className="text-muted">As suas cidades vão aparecer aqui em breve.</p>
            </section>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App;