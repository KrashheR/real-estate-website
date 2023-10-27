export interface ICard {
  apartments: string;
  deliveryDate: string;
  id: number;
  image: string;
  bigImage: string;
  metro: string;
  parking: string;
  title: string;
  description: string;
  type: string;
  walkTime: number;
  features: string;
  location: string;
  rooms: string;
}

export interface ApartmentType {
  num: number;
  price: number;
}

