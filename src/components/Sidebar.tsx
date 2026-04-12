export function Sidebar() {
  return (
    <aside className="bg-light p-3 rounded shadow-sm h-100">
      <h5 className="mb-3 text-muted">Acesso Rápido</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-dark active fw-bold">
            📊 Meu Painel
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark">
            ⭐ Favoritos
          </a>
        </li>
      </ul>
    </aside>
  );
}