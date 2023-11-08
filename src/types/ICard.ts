export interface ICard {
  apartments: string;
  deliveryDate: string;
  id: number;
  image: string;
  bigImage: string;
  metro: string;
  title: string;
  description: string;
  type: string;
  walkTime: number;
  features: string;
  location: string;
  rooms: string;
}

export interface ApartmentType {
  id: string;
  num: number;
  price: number;
  size: string;
  image: string;
  floor: string;
}

export function isApartmentType(apartment: any): apartment is ApartmentType {
  return (
    apartment &&
    typeof apartment === 'object' &&
    'id' in apartment &&
    'num' in apartment &&
    'price' in apartment &&
    'size' in apartment &&
    'image' in apartment &&
    'floor' in apartment
  );
}
