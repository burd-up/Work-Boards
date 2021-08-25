import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import {taskType, userType} from "../../types/types";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import CommunicationWindow from "./AuxiliaryComponents/CommunicationWindow";
import {Badge} from "@material-ui/core";

type PropsType = {
    task: taskType
    currentUser: userType
    approveTask: (payload: { taskId: number }) => void
    sendMessage: (payload: { taskId: number, message: string, author: userType }) => void
    takeTaskForRevision: (payload: { taskId: number }) => void
    unreadMessagesLength: number
    readAllMessageInTask: (payload: { taskId: number, userId: number }) => void
}

const ReviewTask: React.FC<PropsType> = function (props: PropsType) {

    const [isOpenMessages, setIsOpenMessages] = React.useState(false);

    return (
        <Card>
            <TaskContent {...props.task}
            />
            <Box display={'flex'} justifyContent="space-between" m={1}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
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
                    {/*кнопка отправки задачи на доработку*/}
                    {props.task.tester?.id === props.currentUser.id
                    && <Button color={'secondary'} onClick={() => props.takeTaskForRevision({taskId: props.task.id})}
                               endIcon={<RateReviewOutlinedIcon/>}
                               size="medium">revision</Button>
                    }
                    {/*кнопка одобрения задачи*/}
                    {props.task.tester?.id === props.currentUser.id
                    && <Button color={'primary'}
                               onClick={() => props.approveTask({taskId: props.task.id})}
                               endIcon={<ThumbUpAltOutlinedIcon/>}
                               size="medium">approve</Button>
                    }
                    <CommunicationWindow sendMessage={props.sendMessage} currentUser={props.currentUser}
                                         isOpenMessages={isOpenMessages}
                                         setIsOpenMessages={setIsOpenMessages}
                                         {...props.task}/>
                </ButtonGroup>
            </Box>
        </Card>
    );
}

export default ReviewTask;
