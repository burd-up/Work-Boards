import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Paper} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Badge} from "@material-ui/core";
import {Link,} from "react-router-dom";
import {newTasksSelector} from "../../utils/selectors/currentProject-selector";
import {projectType} from "../../types/types";

type ProjectInListPropsType = {
    currentProjectId: number
    project: projectType
    setCurrentProjectId: (payload: {currentProject: number}) => void
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
}));

const ProjectInList: React.FC<ProjectInListPropsType> = function (props: ProjectInListPropsType) {

    const classes = useStyles();

    return (
        <Paper elevation={props.project.id === props.currentProjectId ? 10 : 2} className={classes.projects}
               onClick={() => props.setCurrentProjectId({currentProject: props.project.id})}>
           {/* <Link to={'/boards'} className={classes.list}> // раскоментировав при нажатии будет сразу переходить на выбранный проект */}
                <Box display={'flex'} alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" color={props.project.id === props.currentProjectId ? 'secondary' : 'primary'}>
                        {props.project.name}
                    </Typography>
                    <Badge color="primary" badgeContent={newTasksSelector(props.project.tasks).length}>
                        <Typography>New tasks</Typography>
                    </Badge>
                </Box>
            {/*</Link>*/}
        </Paper>
    );
}

export default ProjectInList;