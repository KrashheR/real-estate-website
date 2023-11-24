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
