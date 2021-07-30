import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {taskType, userType} from "../../types/types";
import {createStyles, LinearProgress} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
    })
);


type PropsType = taskType & {
    currentUser: userType
    takeTaskForReview: (payload: {tester: userType, taskId: number}) => void
    giveTaskForReview: (payload: {taskId: number}) => void
}

const RunningTask: React.FC<PropsType> = function (props:PropsType) {

    const classes = useStyles();

    return (
        <Card>
            <TaskContent title={props.name} priority={props.priority}
                         description={props.description}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                {(props.currentUser.id === props.developer?.id && !props.forReview)
                && <Button color={'primary'}
                            onClick={() => props.giveTaskForReview({taskId: props.id})}
                            endIcon={<ExitToAppIcon/>}
                            size="medium">ready for review</Button>
                }
                {(props.currentUser.id !== props.developer?.id && props.forReview && props.currentUser.accessLevel !== 1)
                && <Button color={'primary'}
                        onClick={() => props.takeTaskForReview({tester: props.currentUser, taskId: props.id})}
                        endIcon={<ExitToAppIcon/>}
                        size="medium">submit for verification</Button>
                }
                { (props.currentUser.id !== props.developer?.id && !props.forReview)
                && <div className={classes.root}><LinearProgress /></div>
                }
            </Box>
        </Card>
    );
}

export default RunningTask;
