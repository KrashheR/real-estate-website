import { ICard, ParkingDetails, ResidentialDetails } from "../types/ICard";

export const getMinAndMaxApartmentPrice = (cards: ICard[]): [number, number] => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  cards.forEach(card => {
    const cardApartments = JSON.parse(card.apartments);
    const apartmentItems: ResidentialDetails[] = cardApartments.apartments;
    const parkingItems: ParkingDetails[] = cardApartments.parking;

    apartmentItems.forEach(apartment => {
      if (apartment.price < minPrice) minPrice = apartment.price;
      if (apartment.price > maxPrice) maxPrice = apartment.price;
    });

    parkingItems.forEach(parking => {
      if (parking.price < minPrice) minPrice = parking.price;
      if (parking.price > maxPrice) maxPrice = parking.price;
    });
  });

  return [minPrice, maxPrice];
}
