import React from "react";
import {messageType} from "../../../../types/types";
import {Box, createStyles, Grid} from "@material-ui/core";
import Message from "./Message";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {grey, indigo,} from "@material-ui/core/colors";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        allMessage: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        messageRight: {
            backgroundColor: indigo[100],
            padding: 5,
            marginTop: 10,
        },
        messageLeft: {
            backgroundColor: grey[100],
            padding: 5,
            marginTop: 10,
        },
    })
);

type AllMessagePropsType = {
    messages: Array<messageType>
    currentUserId: number
}

const AllMessage: React.FC<AllMessagePropsType> = function (props: AllMessagePropsType) {

    const classes = useStyles()

    const messages = props.messages.map((el, index) =>
        <Grid key={el.id} container justifyContent={el.author.id === props.currentUserId ? 'flex-end' : 'flex-start'}>
            <Grid item xs={12} sm={8}>
                <Paper className={el.author.id === props.currentUserId ? classes.messageRight : classes.messageLeft}>
                    <Message {...el}/>
                </Paper>
            </Grid>
        </Grid>)

    return (
        <Box className={classes.allMessage} display={'flex'} flexDirection="column">
            {messages}
        </Box>
    );
}

export default AllMessage;
