import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { selectCardByTitle } from "../../store/reducers/Selectors";
import Apartment from "../../components/layouts/apartment/apartment";
import Catalog from "../../components/layouts/catalog/catalog";

function ApartmentsPage() {
  let { title } = useParams<{ title: string }>();

  if (!title) {
    return <Catalog />;
  }
  const card = useAppSelector(state => selectCardByTitle(state, title as string));

  if (!card) {
    return <Catalog />;
  }

  return (
    <Apartment data={card}/>
  );
}

export default ApartmentsPage;
