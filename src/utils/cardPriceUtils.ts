import { ICard, IApartmentData } from "../types/ICard";

export const getMinAndMaxApartmentPrice = (cards: ICard[]): [number, number] => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  cards.forEach(card => {
    const cardApartments: IApartmentData[] = JSON.parse(card.apartments);

    cardApartments.forEach(apartment => {
      if (apartment.price < minPrice) minPrice = apartment.price;
      if (apartment.price > maxPrice) maxPrice = apartment.price;
    });
  });

  return [minPrice, maxPrice];
}
