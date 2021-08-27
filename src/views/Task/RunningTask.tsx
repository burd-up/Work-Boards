import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {taskType, userType} from "../../types/types";
import {Badge, createStyles, LinearProgress} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import CommunicationWindow from "./AuxiliaryComponents/CommunicationWindow";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            marginTop: 'auto'
        },
    })
);


type PropsType = {
    task: taskType
    currentUser: userType
    takeTaskForReview: (payload: { tester: userType, taskId: number }) => void
    giveTaskForReview: (payload: { taskId: number }) => void
    sendMessage: (payload: { taskId: number, message: string, author: userType }) => void
    unreadMessagesLength: number
    readAllMessageInTask: (payload: {taskId: number, userId: number}) => void
}

const RunningTask: React.FC<PropsType> = function (props: PropsType) {

    const classes = useStyles();

    const [isOpenMessages, setIsOpenMessages] = React.useState(false);

    return (
        <Card>
            <TaskContent {...props.task}/>
            <Box display={'flex'} justifyContent="space-between" alignContent={'center'} m={1}>
                {/*кнопка вызова окна сообщений*/}
                {(props.currentUser.id === props.task.developer?.id ||
                    props.currentUser.id === props.task.tester?.id ||
                    props.currentUser.id === props.task.creator?.id)
                &&
                <Button onClick={() => {
                    setIsOpenMessages(true)
                    props.readAllMessageInTask({taskId: props.task.id, userId: props.currentUser.id})
                }}>
                    <Badge badgeContent={props.unreadMessagesLength} color={"error"}>
                        {<MessageOutlinedIcon color={'primary'}/>}
                    </Badge>
                </Button>
                }
                {/*кнопка подтверждения что задача готова к проверке*/}
                {(props.currentUser.id === props.task.developer?.id && !props.task.forReview)
                && <Button color={'primary'}
                           onClick={() => props.giveTaskForReview({taskId: props.task.id})}
                           endIcon={<ExitToAppIcon/>}
                           size="medium">ready for review</Button>
                }
                {/*кнопка для взятия задачи на проверку (разработчик не может брать свою задачу на проверку)*/}
                {(props.currentUser.id !== props.task.developer?.id && props.task.forReview && props.currentUser.accesses.includes(2))
                && <Button color={'primary'}
                           onClick={() => props.takeTaskForReview({
                               tester: props.currentUser,
                               taskId: props.task.id
                           })}
                           endIcon={<ExitToAppIcon/>}
                           size="medium">submit for verification</Button>
                }
                {(props.currentUser.id !== props.task.developer?.id && !props.task.forReview)
                && <div className={classes.root}><LinearProgress/></div>
                }
                <CommunicationWindow sendMessage={props.sendMessage} currentUser={props.currentUser}
                                     isOpenMessages={isOpenMessages}
                                     setIsOpenMessages={setIsOpenMessages}
                                     {...props.task}/>
            </Box>
        </Card>
    );
}

export default RunningTask;
