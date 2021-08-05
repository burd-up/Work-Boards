import React from "react";
import Typography from "@material-ui/core/Typography";
import {createStyles, Paper} from "@material-ui/core";
import {messageType} from "../../../../types/types";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
    createStyles({
        message: {
            maxWidth: '20vw',
        },
    })
);

/*'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body2'
| 'caption'
| 'button'
| 'overline'
| 'srOnly'
| 'inherit'*/

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
