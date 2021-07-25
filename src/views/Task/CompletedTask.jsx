import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import green from "@material-ui/core/colors/green";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        color: green[500],
    },
}));

function CompletedTask(props) {
    const classes = useStyles();

    return (
        <Card>
            <TaskContent title={'Make something'} priority={6}
                         description={'There is no consensus on the right way to organize a React application. ' +
                         'React gives you a lot of freedom, but with that freedom comes the responsibility of deciding on your own architecture.'}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <CheckCircleOutlineOutlinedIcon fontSize={'large'} className={classes.icon} />
            </Box>
        </Card>
    );
}

export default CompletedTask;
