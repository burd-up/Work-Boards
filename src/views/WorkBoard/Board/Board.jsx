import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CurrentTask from "../../Task/CurrentTask";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    board: {
        minHeight: "65vh",
    },
}));

function Board(props) {

    const classes = useStyles();

    const tasks = props.tasks.map(el => <Grid item xs={12} lg={6} >{el}</Grid>)

    return (
        <Paper elevation={5} className={classes.board}>
            <Typography  align={'center'} variant="h6">
                {props.title}
            </Typography>
            <Container>
                <Grid container spacing={1} >
                    {tasks}
                </Grid>
            </Container>

        </Paper>
    );
}

export default Board;