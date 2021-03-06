import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Board from "./Board/Board";
import CurrentTask from "../Task/CurrentTask";
import RunningTask from "../Task/RunningTask";
import ReviewTask from "../Task/ReviewTask";
import CompletedTask from "../Task/CompletedTask";
import Typography from "@material-ui/core/Typography";
import {PropsWorkBoardType} from "./WorkBoardContainer";
import {unreadMessagesForTaskSelector} from "../../utils/selectors/currentProject-selector";

const useStyles = makeStyles((theme) => ({
    workBoard: {
        margin: 1,
    },
}));

const WorkBoard: React.FC<PropsWorkBoardType> = function (props: PropsWorkBoardType) {

    const classes = useStyles();

    const currentTasks = props.currentTasks.map(el => <CurrentTask
        key={el.id}
        task={el}
        currentUser={props.currentUser}
        takeTaskForDevelopment={props.takeTaskForDevelopment}
    />)

    const runningTasks = props.runningTasks.map(el => <RunningTask
        key={el.id}
        task={el}
        currentUser={props.currentUser}
        takeTaskForReview={props.takeTaskForReview}
        giveTaskForReview={props.giveTaskForReview}
        sendMessage={props.sendMessage}
        unreadMessagesLength={unreadMessagesForTaskSelector(el, props.currentUser.id)}
        readAllMessageInTask={props.readAllMessageInTask}
    />)

    const reviewTasks = props.reviewTasks.map(el => <ReviewTask
        key={el.id}
        task={el}
        currentUser={props.currentUser}
        approveTask={props.approveTask}
        sendMessage={props.sendMessage}
        takeTaskForRevision={props.takeTaskForRevision}
        unreadMessagesLength={unreadMessagesForTaskSelector(el, props.currentUser.id)}
        readAllMessageInTask={props.readAllMessageInTask}
    />)

    const completedTasks = props.completedTasks.map(el => <CompletedTask
        key={el.id}
        task={el}
        currentUser={props.currentUser}
        sendMessage={props.sendMessage}
        unreadMessagesLength={unreadMessagesForTaskSelector(el, props.currentUser.id)}
        readAllMessageInTask={props.readAllMessageInTask}
    />)

    return (
        <div>
            <Typography align={'center'} variant="h6"
                        color={'primary'}>
                {props.currentProject?.name || 'select the current project in the projects section'}</Typography>
            {props.currentProject &&
            <Grid container spacing={2} justifyContent="center" className={classes.workBoard}>
                <Grid item xs={12} md={6}>
                    <Board title={'Current tasks'} tasks={currentTasks}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Board title={'Running tasks'} tasks={runningTasks}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Board title={'Tasks under review'} tasks={reviewTasks}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Board title={'Completed tasks'} tasks={completedTasks}/>
                </Grid>
            </Grid>}
        </div>
    );
}

export default WorkBoard;