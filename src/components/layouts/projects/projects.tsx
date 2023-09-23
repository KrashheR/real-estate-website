import React from "react";
import Container from "../container/container";
import { StyledProjects, StyledProjectsContainer } from "./styled";
import { StyledFilterForm } from "../../forms/filterForm/styled";


function Projects() {
  return(
    <StyledProjects>
      <StyledProjectsContainer>
        <StyledFilterForm>

        </StyledFilterForm>
      </StyledProjectsContainer>
    </StyledProjects>
  );
}

export default Projects;