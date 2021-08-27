import React from "react";
import {PropsListOfProjectsType} from "./ListOfProjectsContainer";
import {Container, Typography} from "@material-ui/core";
import ProjectInList from "./ProjectInList";
import {
    tasksInProjectForUserSelector,
    userAccessibleTasksSelector
} from "../../utils/selectors/currentProject-selector";

const ListOfProjects: React.FC<PropsListOfProjectsType> = function (props: PropsListOfProjectsType) {

    const projects = props.projectsForUser.map(el => <ProjectInList currentProjectId={props.currentProjectId} key={el.id}
                                                                    project={el}
                                                                    currentUser={props.currentUser}
                                                                    users={props.users}
                                                                    addProjectInArrayOfUsers={props.addProjectInArrayOfUsers}
                                                                    addNewUserToProject={props.addNewUserToProject}
                                                                    tasksOfUser={
                                                                        tasksInProjectForUserSelector([el], props.currentUser.id, el.id)}
                                                                    userAccessibleTasks={
                                                                        userAccessibleTasksSelector([el],props.currentUser, el.id)}
                                                                    setCurrentProjectId={props.setCurrentProjectId}/>)

    return (
        <Container>
            <Typography variant={'h6'} color={'primary'}>
                {props.currentUser.projects.length === 0 ? 'you are not involved in any of the projects' : 'Select the project you want to work on'}
            </Typography>
            {projects}
        </Container>
    );
}

export default ListOfProjects;