import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    board: {
        height: "80vh",
        overflow: "auto"
    },
}));

type BoardPropsType = {
    title: string
    tasks: Array<object>
}

const Board: React.FC<BoardPropsType> = function(props: BoardPropsType) {

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
