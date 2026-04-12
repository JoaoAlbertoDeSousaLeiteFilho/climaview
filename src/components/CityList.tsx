import { CityCard } from './CityCard';
import type { ICity } from '../interfaces/ICity';

interface CityListProps {
  cities: ICity[];
  onRemove: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

export function CityList({ cities, onRemove, onToggleFavorite }: CityListProps) {
  return (
    <div className="mt-3">
      {/* o .map pega a lista e transforma cada item num CityCard visual */}
      {cities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          onRemove={onRemove}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}