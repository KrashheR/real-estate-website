import React, { useEffect, useState } from "react";
import { StyledProjectsList } from "./styled";
import Card, { CardType } from "../../../ui/card/card";

function ProjectsList() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.krashher.ru/real-estate/api/get-cards.php")
    .then(response => response.json())
    .then(data => setData(data));
  },[])

  return(
    <StyledProjectsList>
      <Card type={CardType.PREMIUM}/>
      <Card type={CardType.PREMIUM}/>
      <Card type={CardType.PREMIUM}/>
      <Card type={CardType.STANDART}/>
      <Card type={CardType.STANDART}/>
      <Card type={CardType.STANDART}/>
      <Card type={CardType.STANDART}/>
    </StyledProjectsList>
  );
}

export default ProjectsList;