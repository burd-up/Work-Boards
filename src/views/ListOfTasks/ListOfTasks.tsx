import React from "react";
import {AppBar, Badge, Container, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {PropsListOfTasksType} from "./ListOfTasksContainer";
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

    // переменная необходимая для переключения между типами задач см. документацию material.ui
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
            {props.currentUser.projects.length === 0 ?
                <Typography variant={'h6'} color={'primary'}>
                    to display available tasks select the current project in the projects section
                </Typography> :
                <div>
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
                            <Tab
                                label={`Current tasks (${props.tasksOfUser.filter(el => el.status !== 'ready').length})`}/>
                            <Tab
                                label={`Сompleted tasks (${props.tasksOfUser.filter(el => el.status === 'ready').length})`}/>
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
                </div>}
        </Container>
    )
}

export default ListOfTasks;