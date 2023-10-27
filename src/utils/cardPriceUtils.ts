import { ApartmentType, ICard } from "../types/ICard";

export const getMinAndMaxApartmentPrice = (cards: ICard[]): [number, number] => {
  let minPrice = Infinity;
  let maxPrice = -Infinity;

  cards.forEach(card => {
    const apartments = JSON.parse(card.apartments);
    Object.values(apartments).forEach((apartment) => {
      Object.values(apartment as ApartmentType).forEach(apartmentType => {
        const price = parseFloat(apartmentType.price);
        if (price < minPrice) minPrice = price;
        if (price > maxPrice) maxPrice = price;
      });
    });
  });

  return [minPrice, maxPrice];
}
