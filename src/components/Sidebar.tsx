interface SidebarProps {
  onViewChange: (value: boolean) => void;
  activeView: boolean;
}

export function Sidebar({ onViewChange, activeView }: SidebarProps) {
  return (
    <aside className="bg-white p-3 rounded shadow-sm">
      <h5 className="mb-3 text-muted">Acesso Rápido</h5>
      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          {/* botao do painel */}
          <button 
            type="button" 
            onClick={() => {
              console.log("Cliquei em Painel"); 
              onViewChange(false);
            }}
            className={`nav-link w-100 text-start border-0 rounded py-2 px-3 ${!activeView ? 'bg-primary text-white shadow-sm' : 'bg-light text-dark'}`}
          >
            📊 Meu Painel
          </button>
        </li>
        <li className="nav-item">
          {/* botao dos favoritos */}
          <button 
            type="button"
            onClick={() => {
              console.log("Cliquei em Favoritos"); 
              onViewChange(true);
            }}
            className={`nav-link w-100 text-start border-0 rounded py-2 px-3 ${activeView ? 'bg-primary text-white shadow-sm' : 'bg-light text-dark'}`}
          >
            ⭐ Favoritos
          </button>
        </li>
      </ul>
    </aside>
  );
}