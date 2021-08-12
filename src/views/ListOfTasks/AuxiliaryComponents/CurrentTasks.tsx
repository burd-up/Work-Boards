import React from "react";
import {PropsListOfTasksType} from "../ListOfTasksContainer";
import RunningTask from "../../Task/RunningTask";
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

const ReadyTasks: React.FC<AvailableTasksPropsType> = function (props: AvailableTasksPropsType) {

    const classes = useStyles()

    const tasks = props.userAccessibleTasks.map(el => {
            if (props.currentUser.accessLevel === 1) {
                return (
                    <Grid item xs={12} md={6}><CurrentTask currentUser={props.currentUser}
                                                           task={el}
                                                           takeTaskForDevelopment={props.takeTaskForDevelopment}/></Grid>)
            } else if (props.currentUser.accessLevel === 2) {
                return (
                    <Grid item xs={12} md={6}><RunningTask currentUser={props.currentUser}
                                                           task={el}
                                                           takeTaskForReview={props.takeTaskForReview}
                                                           giveTaskForReview={props.giveTaskForReview}
                                                           sendMessage={props.sendMessage}
                    /></Grid>)
            } else if (props.currentUser.accessLevel === 3 && el.forReview) {
                return (
                    <Grid item xs={12} md={6}><RunningTask currentUser={props.currentUser}
                                                           task={el}
                                                           takeTaskForReview={props.takeTaskForReview}
                                                           giveTaskForReview={props.giveTaskForReview}
                                                           sendMessage={props.sendMessage}
                    /></Grid>)
            } else if (props.currentUser.accessLevel === 3 && el.status === 'newTask') {
                return (
                    <Grid item xs={12} md={6}><CurrentTask currentUser={props.currentUser}
                                                           task={el}
                                                           takeTaskForDevelopment={props.takeTaskForDevelopment}/></Grid>)
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

export default ReadyTasks;