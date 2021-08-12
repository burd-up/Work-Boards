import React from "react";
import {PropsListOfTasksType} from "../ListOfTasksContainer";
import RunningTask from "../../Task/RunningTask";
import ReviewTask from "../../Task/ReviewTask";
import CurrentTask from "../../Task/CurrentTask";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10,
    },
}));

type AvailableTasksPropsType = PropsListOfTasksType & {
    value: number
    index: number
}

const AvailableTasks: React.FC<AvailableTasksPropsType> = function (props: AvailableTasksPropsType) {

    const classes = useStyles()

    const tasks = props.tasksOfUser.map(el => {
            if (el.status === 'development') {
                return <Grid item xs={12} md={6}><RunningTask task={el} currentUser={props.currentUser}
                                                              takeTaskForReview={props.takeTaskForReview}
                                                              giveTaskForReview={props.giveTaskForReview}
                                                              sendMessage={props.sendMessage}/></Grid>
            } else if (el.status === 'testing') {
                return <Grid item xs={12} md={6}><ReviewTask task={el} currentUser={props.currentUser}
                                                             approveTask={props.approveTask}
                                                             sendMessage={props.sendMessage}
                                                             takeTaskForRevision={props.takeTaskForRevision}/></Grid>
            } else if (el.status === 'newTask') {
                return <Grid item xs={12} md={6}><CurrentTask task={el} currentUser={props.currentUser}
                                                              takeTaskForDevelopment={props.takeTaskForDevelopment}/></Grid>
            } else {
                return null
            }
        }
    )

    return (
        <div hidden={props.value !== props.index} className={classes.container}>
            {props.value === props.index && (
                <Grid container spacing={2}>
                    {tasks}
                </Grid>
            )}
        </div>
    );
}

export default AvailableTasks;