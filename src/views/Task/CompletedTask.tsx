import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import green from "@material-ui/core/colors/green";
import {makeStyles} from "@material-ui/styles";
import {taskType, userType} from "../../types/types";

const useStyles = makeStyles(theme => ({
    icon: {
        color: green[500],
    },
}));

type PropsType = taskType & {
    currentUser: userType
}

const CompletedTask: React.FC<PropsType> = function (props:PropsType) {
    const classes = useStyles();

    return (
        <Card>
            <TaskContent title={props.name} priority={props.priority}
                         description={props.description}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <CheckCircleOutlineOutlinedIcon fontSize={'large'} className={classes.icon} />
            </Box>
        </Card>
    );
}

export default CompletedTask;
