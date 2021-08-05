import React from "react";
import {messageType} from "../../../../types/types";
import {Box, createStyles} from "@material-ui/core";
import Message from "./Message";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { grey, indigo,} from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        allMessage: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        messageRight: {
            marginLeft: 'auto',
            backgroundColor: indigo[100],
            padding: 5,
            marginTop: 10,
        },
        messageLeft: {
            marginRight: 'auto',
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
        <Paper key={el.id} className={el.author.id === props.currentUserId? classes.messageRight : classes.messageLeft}>
            <Message {...el}/>
        </Paper>)

    return (
        <Box className={classes.allMessage} display={'flex'} flexDirection="column">
            {messages}
        </Box>
    );
}

export default AllMessage;
