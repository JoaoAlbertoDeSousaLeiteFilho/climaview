import type { ICity } from '../interfaces/ICity';

interface CityCardProps {
  city: ICity;
  onRemove: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

export function CityCard({ city, onRemove, onToggleFavorite }: CityCardProps) {
  return (
    <div className="card mb-3 shadow-sm border-0 bg-light">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1 fw-bold">
            {city.name} {city.isFavorite && '⭐'}
          </h5>
          <p className="card-text text-muted text-capitalize mb-0">
            {city.temperature}ºC - {city.condition}
          </p>
        </div>
        <div>
          <button
            className={`btn btn-sm me-2 ${city.isFavorite ? 'btn-warning' : 'btn-outline-warning text-dark'}`}
            onClick={() => onToggleFavorite(city.id)}
          >
            {city.isFavorite ? 'Desfavoritar' : '⭐ Favoritar'}
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onRemove(city.id)}
          >
            🗑️ Remover
          </button>
        </div>
      </div>
    </div>
  );
}