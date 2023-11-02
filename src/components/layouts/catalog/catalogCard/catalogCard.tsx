import { CatalogDetails } from "../../../../types/ICatalog";

interface CatalogCardProps {
  details: CatalogDetails;
}

function CatalogCard({ details }: CatalogCardProps) {
  return (
    <div>
      <img src={details.image} alt="План квартиры" />
      <p>Количество квартир: {details.num}</p>
      <p>Цена: {details.price} млн руб.</p>
      <p>Площадь: {details.size} м²</p>
    </div>
  );
}

export default CatalogCard;