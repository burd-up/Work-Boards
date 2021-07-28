import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Board from "./Board/Board";
import CurrentTask from "../Task/CurrentTask";
import RunningTask from "../Task/RunningTask";
import ReviewTask from "../Task/ReviewTask";
import CompletedTask from "../Task/CompletedTask";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    workBoard: {
        margin: 1,
    },
}));


function WorkBoard(props) {

    const classes = useStyles();

    const currentTasks = props.currentTasks.map(el => <CurrentTask
        key={el.id}
        takeTask={() => props.takeTaskForDevelopment({development: props.currentUser, taskId: el.id})}
        title={el.name}
        priority={el.priority}
        description={el.description}/>)

    const runningTasks = props.runningTasks.map(el => <RunningTask
        key={el.id}
        title={el.name}
        priority={el.priority}
        description={el.description}/>)


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
                <Board title={'Tasks under review'} tasks={[<ReviewTask/>, <ReviewTask/>]}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Board title={'Completed tasks'} tasks={[<CompletedTask/>, <CompletedTask/>]}/>
            </Grid>
        </Grid>
        </div>
    );
}

export default WorkBoard;
