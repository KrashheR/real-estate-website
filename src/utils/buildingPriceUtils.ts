import { IBuilding, IApartmentData } from "../types/IBuilding";

export const getMinAndMaxApartmentPrice = (buildings: IBuilding[]): [number, number] => {
  let minPrice = 9999;
  let maxPrice = -9999;

  buildings.forEach(building => {
    const buildingApartments: IApartmentData[] = JSON.parse(building.apartments);

    buildingApartments.forEach(apartment => {
      if (apartment.price < minPrice) minPrice = apartment.price;
      if (apartment.price > maxPrice) maxPrice = apartment.price;
    });
  });

  return [minPrice, maxPrice];
}

export const sumApartmentsNum = (apartmentData: IApartmentData[]): number[] => {
  let apartmentSum = 0;
  let parkingSum = 0;

  apartmentData.forEach((item) => {
    if (item.roomNum === 'parking') {
      parkingSum += item.num;
    } else {
      apartmentSum += item.num;
    }
  });

  return [apartmentSum, parkingSum];
}

export const findMinPrice = (apartmentData: IApartmentData[]): number[] => {
  let apartmentMin = 999;
  let parkingMin = 999;

  apartmentData.forEach((item) => {
    if (item.roomNum === 'parking') {
      parkingMin = Math.min(parkingMin, item.price);
    } else {
      apartmentMin = Math.min(apartmentMin, item.price);
    }
  });
  return [apartmentMin, parkingMin];
}