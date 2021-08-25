import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import green from "@material-ui/core/colors/green";
import {makeStyles} from "@material-ui/styles";
import {taskType, userType} from "../../types/types";
import Button from "@material-ui/core/Button";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import CommunicationWindow from "./AuxiliaryComponents/CommunicationWindow";
import {Badge} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    icon: {
        color: green[500],
    },
}));

type PropsType = {
    task: taskType
    currentUser: userType
    sendMessage: (payload: { taskId: number, message: string, author: userType }) => void
    unreadMessagesLength: number
    readAllMessageInTask: (payload: { taskId: number, userId: number }) => void
}

const CompletedTask: React.FC<PropsType> = function (props: PropsType) {
    const classes = useStyles();

    const [isOpenMessages, setIsOpenMessages] = React.useState(false);

    return (
        <Card>
            <TaskContent {...props.task}
            />
            <Box display={'flex'} justifyContent="space-between" m={1}>
                {(props.currentUser.id === props.task.developer?.id ||
                    props.currentUser.id === props.task.tester?.id ||
                    props.currentUser.id === props.task.creator?.id)
                &&
                <Badge badgeContent={props.unreadMessagesLength} color={"error"}>
                    <Button onClick={() => {
                        setIsOpenMessages(true)
                        props.readAllMessageInTask({taskId: props.task.id, userId: props.currentUser.id})
                    }}>
                        {<MessageOutlinedIcon color={'primary'}/>}
                    </Button>
                </Badge>
                }
                <CheckCircleOutlineOutlinedIcon fontSize={'large'} className={classes.icon}/>
                <CommunicationWindow sendMessage={props.sendMessage} currentUser={props.currentUser}
                                     isOpenMessages={isOpenMessages}
                                     setIsOpenMessages={setIsOpenMessages}
                                     {...props.task}/>
            </Box>
        </Card>
    );
}

export default CompletedTask;
