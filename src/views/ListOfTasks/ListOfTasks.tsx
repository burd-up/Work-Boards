import React from "react";
import {AppBar, Badge, Container, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {PropsListOfTasksType} from "./ListOfTasksContainer";
import RunningTask from "../Task/RunningTask";
import ReviewTask from "../Task/ReviewTask";
import CurrentTask from "../Task/CurrentTask";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import AvailableTasks from "./AuxiliaryComponents/AvailableTasks";
import SwipeableViews from 'react-swipeable-views';
import CurrentTasks from "./AuxiliaryComponents/CurrentTasks";
import ReadyTasks from "./AuxiliaryComponents/ReadyTasks";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10,
    },
}));

const ListOfTasks: React.FC<PropsListOfTasksType> = function (props: PropsListOfTasksType) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={`New available tasks (${props.userAccessibleTasks.length})`}/>
                    <Tab label={`Current tasks (${props.tasksOfUser.filter(el => el.status !== 'ready').length})`}/>
                    <Tab label={`Сompleted tasks (${props.tasksOfUser.filter(el => el.status === 'ready').length})`}/>
                </Tabs>
            </AppBar>
            {/*<Typography variant={'h6'} color={'primary'}>{tasks.length > 0 ?"Your tasks in current project:"
                : "so far you do not have current tasks, to take a task go to the section of the current project"}</Typography>*/}
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <CurrentTasks {...props} value={value} index={0}/>
                <AvailableTasks {...props} value={value} index={1}/>
                <ReadyTasks {...props} value={value} index={2}/>
            </SwipeableViews>
        </Container>
    )
}

export default ListOfTasks;