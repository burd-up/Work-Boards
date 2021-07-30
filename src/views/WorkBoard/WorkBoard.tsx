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

const useStyles = makeStyles((theme) => ({
    workBoard: {
        margin: 1,
    },
}));

const WorkBoard: React.FC<PropsWorkBoardType> = function(props: PropsWorkBoardType) {

    const classes = useStyles();

    const currentTasks = props.currentTasks.map(el => <CurrentTask
        {...el}
        currentUser={props.currentUser}
        takeTaskForDevelopment={props.takeTaskForDevelopment}
    />)

    const runningTasks = props.runningTasks.map(el => <RunningTask
        {...el}
        currentUser={props.currentUser}
        takeTaskForReview={props.takeTaskForReview}
        giveTaskForReview={props.giveTaskForReview}
    />)

    const reviewTasks = props.reviewTasks.map(el => <ReviewTask
        {...el}
        currentUser={props.currentUser}
        approveTask={props.approveTask}
    />)

    const completedTasks = props.completedTasks.map(el => <CompletedTask
        {...el}
        currentUser={props.currentUser}
    />)

    return (
        <div>
        <Typography align={'center'} variant="h6" color={'primary'}>{props.currentProject.name}</Typography>
        <Grid container spacing={2} justifyContent="center" className={classes.workBoard}>
            <Grid item xs={12} md={6}>
                <Board title={'Current tasks'}  tasks={currentTasks}/>
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
        </Grid>
        </div>
    );
}

export default WorkBoard;