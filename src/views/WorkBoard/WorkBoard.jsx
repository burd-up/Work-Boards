import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Board from "./Board/Board";
import amber from "@material-ui/core/colors/amber";
import CurrentTask from "../Task/CurrentTask";
import RunningTask from "../Task/RunningTask";
import ReviewTask from "../Task/ReviewTask";
import CompletedTask from "../Task/CompletedTask";

const useStyles = makeStyles((theme) => ({
    workBoard: {
        margin: 1,
    },
}));


function WorkBoard(props) {

    const classes = useStyles();

    return (

        <Grid container spacing={2} justifyContent="center" className={classes.workBoard}>
            <Grid item xs={12} md={6}>
                <Board title={'Current tasks'}  tasks={[<CurrentTask/>, <CurrentTask/>]}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Board title={'Running tasks'} tasks={[<RunningTask/>, <RunningTask/>]}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Board title={'Tasks under review'} tasks={[<ReviewTask/>, <ReviewTask/>]}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Board title={'Completed tasks'} tasks={[<CompletedTask/>, <CompletedTask/>]}/>
            </Grid>
        </Grid>
    );
}

export default WorkBoard;
