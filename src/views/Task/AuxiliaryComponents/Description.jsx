import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
    description: {
        maxHeight: 100,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));

function MoreInformation(props) {
    return (
        <Dialog
            open={props.open}
            onClose={props.setIsOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Description of task"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

function Description(props) {
    const [isOpenMoreInformation, setIsOpenMoreInformation] = React.useState(false);

    const classes = useStyles();

    return (
        <Box>
            <Typography variant="body2" component="p" align={'left'} className={classes.description}>
                {props.description}
            </Typography>
            <Box display={'box'}>
                <Button onClick={() => setIsOpenMoreInformation(true)} size={'small'}>{'... learn more'}</Button>
            </Box>
            <MoreInformation description={props.description} open={isOpenMoreInformation}
                             setIsOpen={() => setIsOpenMoreInformation(false)}/>
        </Box>
    );
}

export default Description;
