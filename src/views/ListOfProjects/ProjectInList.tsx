import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Divider, Paper} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Badge} from "@material-ui/core";
import {projectType, taskType, userType} from "../../types/types";
import AddWorkers from "./ChangeProject/AddWorkers";
import {
    unreadMessagesForProjectSelector,
    usersForAddingToProjectSelector
} from "../../utils/selectors/currentProject-selector";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

type ProjectInListPropsType = {
    currentProjectId: number | null
    project: projectType
    setCurrentProjectId: (payload: { currentProject: number }) => void
    currentUser: userType
    tasksOfUser: Array<taskType>
    userAccessibleTasks: Array<taskType>
    users: Array<userType>
    addNewUserToProject: (payload: { users: Array<userType>, projectId: number }) => void
    addProjectInArrayOfUsers: (payload: { users: Array<number>, projectId: number }) => void
}

const useStyles = makeStyles((theme) => ({
    projects: {
        margin: 10,
        padding: 25,
    },
    button: {
        marginLeft: 5
    },
    list: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tasks: {
        margin: 5,
        marginLeft: 'auto'
    },
}));

const ProjectInList: React.FC<ProjectInListPropsType> = function (props: ProjectInListPropsType) {

    const classes = useStyles();

    let currentTasks = props.tasksOfUser.filter(el => el.status !== 'ready').length;

    const [isOpenMenuAddingWorkers, setIsOpenMenuAddingWorkers] = useState<boolean>(false)

    const unreadMessagesForProject = unreadMessagesForProjectSelector(props.project, props.currentUser.id)

    return (
        <Paper elevation={props.project.id === props.currentProjectId ? 10 : 2} className={classes.projects}
               onClick={() => props.setCurrentProjectId({currentProject: props.project.id})}>
            <Box display={'flex'} alignItems="center" justifyContent="space-between">
                <Typography variant="h6" color={props.project.id === props.currentProjectId ? 'secondary' : 'primary'}>
                        {props.project.name}
                        {unreadMessagesForProject !== 0 && <Badge color="error" badgeContent={unreadMessagesForProject}>
                            <MailOutlineIcon className={classes.button}/>
                        </Badge> }
                    {props.currentUser.accesses.includes(4) &&
                    <Button className={classes.button} onClick={() => setIsOpenMenuAddingWorkers(true)}
                            color={'primary'}>
                        <GroupAddIcon/>
                    </Button>}
                </Typography>
                <Box>
                    <Badge color="primary" badgeContent={currentTasks} showZero>
                        <Typography>Current tasks</Typography>
                    </Badge>
                    <Divider className={classes.tasks}/>
                    <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                           color="primary" badgeContent={props.userAccessibleTasks.length} className={classes.tasks}
                           showZero>
                        <Typography>Available tasks</Typography>
                    </Badge>
                </Box>
            </Box>
            <AddWorkers setIsOpenMenuAddingWorkers={setIsOpenMenuAddingWorkers}
                        addProjectInArrayOfUsers={props.addProjectInArrayOfUsers}
                        isOpenMenuAddingWorkers={isOpenMenuAddingWorkers}
                        addNewUserToProject={props.addNewUserToProject}
                        project={props.project}
                        availableUsers={usersForAddingToProjectSelector(props.project, props.users)}/>
        </Paper>
    );
}

export default ProjectInList;