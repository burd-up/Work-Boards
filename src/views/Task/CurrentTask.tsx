import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import TaskContent from "./AuxiliaryComponents/TaskContent";
import {taskType, userType} from "../../types/types";

type PropsType ={
    task: taskType
    currentUser: userType
    takeTaskForDevelopment: (payload: {developer: userType, taskId: number}) => void
}


const CurrentTask: React.FC<PropsType> = function (props:PropsType ) {

    return (
        <Card>
            <TaskContent {...props.task}/>
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                {props.currentUser.accessLevel !== 2 &&
                <Button color='primary'
                        onClick={() => props.takeTaskForDevelopment({developer: props.currentUser, taskId: props.task.id})}
                        endIcon={<LibraryAddOutlinedIcon/>}
                        size="medium">take a task</Button>
                }
            </Box>
        </Card>
    );
}

export default CurrentTask;
