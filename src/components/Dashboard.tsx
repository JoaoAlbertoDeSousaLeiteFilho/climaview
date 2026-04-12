import { useState } from 'react';
import { AddCityForm } from './AddCityForm';
import type { ICity } from '../interfaces/ICity';

export function Dashboard() {
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

  // logica de calculo
  const totalCities = cities.length;
  
  // Filtra cidades com sol (procurando palavras no texto da API)
  const sunnyCities = cities.filter(city => 
    city.condition.toLowerCase().includes('limpo') || 
    city.condition.toLowerCase().includes('sol')
  ).length;

  // Filtra cidades com chuva
  const rainyCities = cities.filter(city => 
    city.condition.toLowerCase().includes('chuva') || 
    city.condition.toLowerCase().includes('garoa')
  ).length;

  // Filtra cidades frias (menos de 15 graus)
  const coldCities = cities.filter(city => city.temperature < 15).length;

  return (
    <section className="bg-white p-4 rounded shadow-sm h-100">
      <h2 className="mb-4">Dashboard do Clima 🌤️</h2>

      {/* 1. O formulário que criámos antes */}
      <AddCityForm onCityAdded={handleAddCity} />

      {/* 2. Cartões de Estatísticas (Bootstrap) */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary text-white mb-3 shadow-sm">
            <div className="card-body py-3">
              <h6 className="card-title opacity-75">Total</h6>
              <h3 className="mb-0 fw-bold">{totalCities}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning text-dark mb-3 shadow-sm">
            <div className="card-body py-3">
              <h6 className="card-title opacity-75">☀️ Sol</h6>
              <h3 className="mb-0 fw-bold">{sunnyCities}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-info text-white mb-3 shadow-sm">
            <div className="card-body py-3">
              <h6 className="card-title opacity-75">🌧️ Chuva</h6>
              <h3 className="mb-0 fw-bold">{rainyCities}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-secondary text-white mb-3 shadow-sm">
            <div className="card-body py-3">
              <h6 className="card-title opacity-75">❄️ Frio</h6>
              <h3 className="mb-0 fw-bold">{coldCities}</h3>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h5 className="mt-4 text-muted">Cidades Monitorizadas</h5>
      {cities.length === 0 ? (
        <p className="text-muted italic small">Nenhuma cidade adicionada ainda.</p>
      ) : (
        <p className="text-success small fw-bold">Lista de cidades em processamento...</p>
      )}
    </section>
  );
}