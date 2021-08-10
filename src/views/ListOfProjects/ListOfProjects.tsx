import React from "react";
import {PropsListOfProjectsType} from "./ListOfProjectsContainer";
import {Container} from "@material-ui/core";
import ProjectInList from "./ProjectInList";

const ListOfProjects: React.FC<PropsListOfProjectsType> = function (props: PropsListOfProjectsType) {

    const projects = props.projectsForUser.map(el => <ProjectInList currentProjectId={props.currentProjectId}
                                                                    project={el}
                                                                    setCurrentProjectId={props.setCurrentProjectId}/>)

    return (
        <Container>
            {projects}
        </Container>
    );
}

export default ListOfProjects;