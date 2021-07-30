import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import {taskType, userType} from "../../types/types";

type PropsType = taskType & {
    currentUser: userType
    approveTask: (payload: {taskId: number}) => void
}

const ReviewTask: React.FC<PropsType> = function (props:PropsType) {

    return (
        <Card>
            <TaskContent title={props.name} priority={props.priority}
                         description={props.description}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    {props.tester?.id === props.currentUser.id
                    && <Button color={'secondary'} endIcon={<RateReviewOutlinedIcon/>}
                               size="medium">for revision</Button>
                    }
                    {props.tester?.id === props.currentUser.id
                    && <Button color={'primary'}
                               onClick={() => props.approveTask({taskId: props.id})}
                               endIcon={<ThumbUpAltOutlinedIcon/>}
                            size="medium">approve</Button>
                    }
                </ButtonGroup>
            </Box>
        </Card>
    );
}

export default ReviewTask;
