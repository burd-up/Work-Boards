import React from "react";
import {PropsListOfTasksType} from "../ListOfTasksContainer";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import CompletedTask from "../../Task/CompletedTask";
import {unreadMessagesForTaskSelector} from "../../../utils/selectors/currentProject-selector";
import RunningTask from "../../Task/RunningTask";

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

    const readyTasks = props.tasksOfUser.map(el => {
            if (el.status === 'ready') {
                return (
                    <Grid item xs={12} md={6}><CompletedTask task={el} currentUser={props.currentUser}
                                                             sendMessage={props.sendMessage}
                                                             unreadMessagesLength={unreadMessagesForTaskSelector(el, props.currentUser.id)}
                                                             readAllMessageInTask={props.readAllMessageInTask}
                    /></Grid>)
            }
        }
    )

    return (
        <div hidden={props.value !== props.index} className={classes.container}>
            {props.value === props.index && (
                <Grid container spacing={2}>
                    {readyTasks}
                </Grid>
            )}
        </div>
    );
}

export default ReadyTasks;