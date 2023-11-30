export interface IBuilding {
  apartments: string;
  completionDate: string;
  id: string;
  image: string;
  imageMobile: string;
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

export interface IApartmentDocumentsData {
  documentId: string;
  title: string;
  downloadText: string;
  downloadLink: string;
  imageSrc: string;
}
