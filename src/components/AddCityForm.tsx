import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { getCityWeather } from '../services/weatherService';
import type { ICity } from '../interfaces/ICity';

// definimos que este formulário precisa "avisar" o painel principal quando achar cidade
interface AddCityFormProps {
  onCityAdded: (city: ICity) => void;
}

export function AddCityForm({ onCityAdded }: AddCityFormProps) {
  // guardando o que o usuário digita
  const [cityName, setCityName] = useState('');
  // guardando o status de carregamento (para desativar o botão enquanto busca)
  const [loading, setLoading] = useState(false);
  // guardando mensagens de erro 
  const [error, setError] = useState('');

  // função que roda quando o usuário clica em adicionar ou da Enter
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault(); // impede a pagina de recarregar 
    
    if (!cityName.trim()) return; // se estiver vazio, não faz nada

    setLoading(true);
    setError('');

    try {
      //  chama o weatherService
      const newCity = await getCityWeather(cityName);
      
      // entrega a cidade pronta para o painel principal
      onCityAdded(newCity);
      
      // lmpa o campo de texto para a próxima busca
      setCityName('');
    } catch (err) {
      setError('Cidade não encontrada. Verifique o nome e tente novamente.');
    } finally {
      setLoading(false); // Terminou de carregar (dando certo ou errado)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome da cidade (ex: São Paulo, Tokyo)..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          disabled={loading}
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Adicionar'}
        </button>
      </div>
      {/* Se tiver algum erro, mostra este texto vermelho embaixoo */}
      {error && <div className="text-danger mt-2 small">{error}</div>}
    </form>
  );
}