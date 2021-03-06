import React from "react";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import ScheduleIcon from '@material-ui/icons/Schedule';

type PriorityPropsType = {
    priority: number
}

const Priority: React.FC<PriorityPropsType> = function (props:PriorityPropsType) {
    return (
        <Box display={'flex'} justifyContent="space-between" ml={1}>
            <Badge badgeContent={props.priority} color={props.priority > 6 ? 'error' : 'primary'}>
                <ScheduleIcon color={'primary'}/>
            </Badge>
        </Box>
    );
}

export default Priority;
