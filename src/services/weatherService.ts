import type { ICity } from '../interfaces/ICity';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


const API_KEY = '614bc4f7946efc38d743774b4a4de4b1'; 

export async function getCityWeather(cityName: string): Promise<ICity> {
  try {
    const response = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`);
    
    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }

    const data = await response.json();

    // Aqui usamos a ICity 
    return {
      id: data.id,
      name: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
      isFavorite: false
    };

  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
    throw error;
  }
}