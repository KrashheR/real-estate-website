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
  documents: string;
}

export interface IApartmentFeature {
  type: string;
  description: string;
  id: string;
}

export interface IApartmentData {
  id: string;
  num: number;
  price: number;
  size: string;
  image: string;
  floor: string;
  roomNum: string;
}

export interface IRoomSlides {
  type: string;
  image: string;
}

export interface IDocumentsData {
  documentId: string;
  title: string;
  downloadText: string;
  downloadLink: string;
  imageSrc: string;
}

export function isResidentialtType(apartment: any): apartment is IApartmentData {
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
