import { useState } from 'react';
import { AddCityForm } from './AddCityForm';
import { CityList } from './CityList';
import type { ICity } from '../interfaces/ICity';

// definição das propriedades que o dashboard recebe
interface DashboardProps {
  showOnlyFavorites: boolean;
}

export function Dashboard({ showOnlyFavorites }: DashboardProps) {
  // este e o estado principal: uma lista (array) de cidades
  const [cities, setCities] = useState<ICity[]>([]);

  // função que recebe a cidade do formulario e guarda na lista
  const handleAddCity = (newCity: ICity) => {
    if (cities.some(city => city.id === newCity.id)) {
      alert('Esta cidade já foi adicionada!');
      return;
    }
    setCities([...cities, newCity]);
  };

  // função de remover (crud)
  const handleRemoveCity = (id: number) => {
    setCities(cities.filter(city => city.id !== id));
  };

  // função de favoritar (interação)
  const handleToggleFavorite = (id: number) => {
    setCities(cities.map(city => 
      city.id === id ? { ...city, isFavorite: !city.isFavorite } : city
    ));
  };

  // lógica de filtro para decidir quais cidades renderizar na lista
  const displayedCities = showOnlyFavorites 
    ? cities.filter(c => c.isFavorite) 
    : cities;

 // logica de calculo
  const totalCities = cities.length;
  
  // filtra sol 
  const sunnyCities = cities.filter(city => {
    const cond = city.condition.toLowerCase();
    return cond.includes('limpo') || cond.includes('clear') || cond.includes('sol') || cond.includes('sun');
  }).length;

/// filtra nublado 
  const cloudyCities = cities.filter(city => {
    // Transformamos em minúsculo e removemos espaços extras
    const cond = city.condition.toLowerCase().trim();
    
    // busca por palavras relacionadas a nuvens
    return cond.includes('nuv') || cond.includes('cloud') || cond.includes('nub');
  }).length;

  // filtra cidades com chuva
  const rainyCities = cities.filter(city => {
    const cond = city.condition.toLowerCase();
    return cond.includes('chuva') || cond.includes('rain') || cond.includes('garoa') || cond.includes('storm');
  }).length;

  // filtra cidades frias com base na temperatura
  const coldCities = cities.filter(city => city.temperature < 15).length;

  return (
    <section className="bg-white p-4 rounded shadow-sm h-100">
      <h2 className="mb-4">
        {showOnlyFavorites ? "Cidades Favoritas ⭐" : "Dashboard do Clima 🌤️"}
      </h2>

      {/* o formulário que criámos antes */}
      {!showOnlyFavorites && <AddCityForm onCityAdded={handleAddCity} />}

      {/* cartões de Estatísticas (Bootstrap) */}
      <div className="row mb-4 g-2 row-cols-2 row-cols-md-5">
        <div className="col">
          <div className="card bg-primary text-white h-100 shadow-sm border-0">
            <div className="card-body py-2 text-center">
              <h6 className="card-title opacity-75 small">Total</h6>
              <h4 className="mb-0 fw-bold">{totalCities}</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-warning text-dark h-100 shadow-sm border-0">
            <div className="card-body py-2 text-center">
              <h6 className="card-title opacity-75 small">☀️ Sol</h6>
              <h4 className="mb-0 fw-bold">{sunnyCities}</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white h-100 shadow-sm border-0" style={{backgroundColor: '#6c757d'}}>
            <div className="card-body py-2 text-center">
              <h6 className="card-title opacity-75 small">☁️ Nublado</h6>
              <h4 className="mb-0 fw-bold">{cloudyCities}</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-info text-white h-100 shadow-sm border-0">
            <div className="card-body py-2 text-center">
              <h6 className="card-title opacity-75 small">🌧️ Chuva</h6>
              <h4 className="mb-0 fw-bold">{rainyCities}</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-secondary text-white h-100 shadow-sm border-0">
            <div className="card-body py-2 text-center">
              <h6 className="card-title opacity-75 small">❄️ Frio</h6>
              <h4 className="mb-0 fw-bold">{coldCities}</h4>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h5 className="mt-4 text-muted">
        {showOnlyFavorites ? "Seus Favoritos" : "Cidades Monitorizadas"}
      </h5>
      
      {/* lista de cidades com as funções de remover e favoritar */}
      {cities.length === 0 ? (
        <p className="text-muted italic small">Nenhuma cidade adicionada ainda.</p>
      ) : displayedCities.length === 0 && showOnlyFavorites ? (
        <p className="text-warning italic small">Você ainda não favoritou nenhuma cidade nesta lista.</p>
      ) : (
        <CityList 
          cities={displayedCities} // lista filtrada conforme o acesso rapido
          onRemove={handleRemoveCity} 
          onToggleFavorite={handleToggleFavorite} 
        />
      )}
    </section>
  );
}