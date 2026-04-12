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
    </div>
  )
}

export default App;