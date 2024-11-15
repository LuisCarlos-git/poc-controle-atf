import { City, CityPersistence } from '@/types/services/cities';
import { IMapper } from '@/types/utils/mapper';

class CitesMapper implements IMapper<CityPersistence[], City[]> {
  toDomain(data: CityPersistence[]): City[] {
    return data.map((city) => ({
      id: city.id,
      name: city.nome,
    }));
  }
}

export const citiesMapper = new CitesMapper();
