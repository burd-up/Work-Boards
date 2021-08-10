import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {taskType, userType} from "../../../types/types";
import {ButtonGroup, Chip, IconButton, OutlinedInput}
    from "@material-ui/core";
import Priority from "./Subcomponents/Priority";
import Paper from "@material-ui/core/Paper";
import { InputAdornment } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import WorkersAccordion from "./Subcomponents/WorkersAccordion";
import TitleForDialog from "./Subcomponents/TitleForDialogOfTask";
import AllMessage from "./Subcomponents/AllMessage";


type AllInformationTaskPropsType = taskType & {
    setIsOpenMessages: (arg: boolean) => void
    isOpenMessages: boolean
    currentUser: userType
    sendMessage: (payload: { taskId: number, message: string, author: userType }) => void
}

const useStyles = makeStyles(theme => ({
    dialogContent: {
        overflow: "hidden",
        overflowY: 'hidden',
    },
    placeForMessages: {
        minHeight: 165,
        maxHeight: 400,
        marginTop: 10,
        marginBottom: 10,
        overflowY: 'auto'
    },
    inputMessage: {
        marginBottom: 5,
    }
}));

const CommunicationWindow: React.FC<AllInformationTaskPropsType> = function (props: AllInformationTaskPropsType) {

    const classes = useStyles();

    const [currentMessage, setCurrentMessage] = useState("")

    const send: ()=> void = () => {
        props.sendMessage({taskId: props.id, message: currentMessage, author: props.currentUser})
        setCurrentMessage('')
    }

    return (
        <Dialog
            fullWidth={true}
            open={props.isOpenMessages}
            onClose={() => props.setIsOpenMessages(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <TitleForDialog name={props.name} priority={props.priority} status={props.status}/>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <WorkersAccordion creator={props.creator} developer={props.developer} tester={props.tester}/>
                <Paper elevation={3} className={classes.placeForMessages}>
                    <AllMessage messages={props.communication} currentUserId={props.currentUser.id}/>
                </Paper>
                    <OutlinedInput
                        /*onKeyDown={event => event.keyCode === 13 && send()}*/
                        multiline={true}
                        maxRows={5}
                        placeholder={'enter message...'}
                        fullWidth={true}
                        className={classes.inputMessage}
                        onChange={(event) => setCurrentMessage(event.target.value)}
                        value={currentMessage}
                        endAdornment={
                            <InputAdornment position="end" defaultValue={currentMessage}>
                                <IconButton onClick={send}>
                                    <SendIcon color={'primary'}/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
            </DialogContent>
        </Dialog>
    );
}

export default CommunicationWindow;
