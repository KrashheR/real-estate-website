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

export interface ApartmentData {
  id: string;
  num: number;
  price: number;
}

export interface ParkingDetails extends ApartmentData {}

export interface ResidentialDetails extends ApartmentData {
  size: string;
  image: string;
  floor: string;
  roomNum: string;
}

export function isResidentialtType(apartment: any): apartment is ResidentialDetails {
  return (
    apartment &&
    typeof apartment === 'object' &&
    'id' in apartment &&
    'num' in apartment &&
    'price' in apartment &&
    'size' in apartment &&
    'image' in apartment &&
    'floor' in apartment &&
    'roomNum' in apartment
  );
}
