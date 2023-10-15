export interface ICard {
  apartments: string;
  deliveryDate: string;
  href: string;
  id: string;
  image: string;
  metro: string;
  parking: string;
  title: string;
  type: string;
  walkTime: number;
}

export interface ApartmentType {
  num: number;
  price: number;
}