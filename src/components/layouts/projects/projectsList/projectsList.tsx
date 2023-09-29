import React from "react";
import { StyledProjectsList } from "./styled";
import Card from "../../../ui/card/card";

function ProjectsList() {
  return(
    <StyledProjectsList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledProjectsList>
  );
}

export default ProjectsList;