import { httpClient } from '@/lib/httpClient';
import {
  City,
  CityPersistence,
  ICitiesServices,
} from '@/types/services/cities';
import { citiesMapper } from './mapper';

class CitiesServices implements ICitiesServices {
  async getCities(): Promise<City[]> {
    const response = await httpClient.get<CityPersistence[]>(
      'http://servicodados.ibge.gov.br/api/v1/localidades/estados/17/municipios',
    );

    return citiesMapper.toDomain(response.data);
  }
}

export const citiesServices = new CitiesServices();
