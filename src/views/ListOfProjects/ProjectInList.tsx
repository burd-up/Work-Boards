import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Divider, Paper} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Badge} from "@material-ui/core";
import {Link,} from "react-router-dom";
import {projectType, taskType, userType} from "../../types/types";

type ProjectInListPropsType = {
    currentProjectId: number | null
    project: projectType
    setCurrentProjectId: (payload: {currentProject: number}) => void
    currentUser: userType
    tasksOfUser: Array<taskType>
    userAccessibleTasks: Array<taskType>
}

const useStyles = makeStyles((theme) => ({
    projects: {
        margin: 10,
        padding: 25,
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

    let currentTasks = props.tasksOfUser.filter(el => el.status !== 'ready').length ;

    return (
        <Paper elevation={props.project.id === props.currentProjectId ? 10 : 2} className={classes.projects}
               onClick={() => props.setCurrentProjectId({currentProject: props.project.id})}>
           {/* <Link to={'/boards'} className={classes.list}> // раскоментировав при нажатии будет сразу переходить на выбранный проект */}
                <Box display={'flex'} alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" color={props.project.id === props.currentProjectId ? 'secondary' : 'primary'}>
                        {props.project.name}
                    </Typography>
                    <Box>
                    <Badge color="primary" badgeContent={currentTasks} showZero>
                        <Typography>Current tasks</Typography>
                    </Badge>
                        <Divider className={classes.tasks}/>
                    <Badge anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                           color="primary" badgeContent={props.userAccessibleTasks.length} className={classes.tasks} showZero>
                        <Typography>Available tasks</Typography>
                    </Badge>
                    </Box>
                </Box>
            {/*</Link>*/}
        </Paper>
    );
}

export default ProjectInList;