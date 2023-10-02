import React from "react";
import { StyledProjects, StyledProjectsContainer } from "./styled";
import FilterForm from "../../forms/filterForm/filterForm";
import ProjectsList from "./projectsList/projectsList";


function Projects() {
  return(
    <StyledProjects>
      <StyledProjectsContainer>
        <FilterForm />
        <ProjectsList />
      </StyledProjectsContainer>
    </StyledProjects>
  );
}

export default Projects;