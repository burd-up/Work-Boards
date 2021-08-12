import React from "react";
import {PropsListOfProjectsType} from "./ListOfProjectsContainer";
import {Container, Typography} from "@material-ui/core";
import ProjectInList from "./ProjectInList";
import {
    tasksInProjectForUserSelector,
    userAccessibleTasksSelector
} from "../../utils/selectors/currentProject-selector";

const ListOfProjects: React.FC<PropsListOfProjectsType> = function (props: PropsListOfProjectsType) {

    const projects = props.projectsForUser.map(el => <ProjectInList currentProjectId={props.currentProjectId}
                                                                    project={el}
                                                                    currentUser={props.currentUser}
                                                                    tasksOfUser={
                                                                        tasksInProjectForUserSelector([el], props.currentUser.id, el.id)}
                                                                    userAccessibleTasks={
                                                                        userAccessibleTasksSelector([el],props.currentUser, el.id)}
                                                                    setCurrentProjectId={props.setCurrentProjectId}/>)

    return (
        <Container>
            <Typography variant={'h6'} color={'primary'}>Select the project you want to work on</Typography>
            {projects}
        </Container>
    );
}

export default ListOfProjects;