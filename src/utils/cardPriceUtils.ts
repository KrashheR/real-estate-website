import { ApartmentType, ICard } from "../types/ICard";

export const getMinAndMaxApartmentPrice = (cards: ICard[]): [number, number] => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  cards.forEach(card => {
    const apartments = JSON.parse(card.apartments);
    Object.values(apartments).forEach((apartment) => {
      Object.values(apartment as ApartmentType).forEach(apartmentType => {
        if (apartmentType.price < minPrice) minPrice = apartmentType.price;
        if (apartmentType.price > maxPrice) maxPrice = apartmentType.price;
      });
    });
  });

  return [minPrice, maxPrice];
}