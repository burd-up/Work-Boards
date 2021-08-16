import React from "react";
import Typography from "@material-ui/core/Typography";
import {createStyles, Paper} from "@material-ui/core";
import {messageType} from "../../../../types/types";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
    createStyles({
        message: {
            maxWidth: '20vw',
            minWidth: 250
        },
    })
);

const Message: React.FC<messageType> = function (props: messageType) {

    const classes = useStyles();

    return (
                <div className={classes.message}>
                    <Typography variant={'subtitle2'} color={'primary'} gutterBottom={true}>
                        {`${props.author.name} ${props.author.surname} (${props.author.position})`}
                    </Typography>
                    <Typography color={'textPrimary'} variant={'body2'} gutterBottom={true}>
                        {props.message}
                    </Typography>
                </div>
    );
}

export default Message;
