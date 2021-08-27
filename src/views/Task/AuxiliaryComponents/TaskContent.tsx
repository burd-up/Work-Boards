import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Priority from "./Subcomponents/Priority";
import Description from "./Subcomponents/Description";
import AllInformationOfTask from "./AllInformationTask";
import {taskType} from "../../../types/types";

const TaskContent: React.FC<taskType> = function (props: taskType) {

    const [isOpenMoreInformation, setIsOpenMoreInformation] = React.useState(false);

    return (
        <CardContent>
            <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
                <Typography variant="h6" component="h2" display="inline">{props.name}</Typography>
                <Priority priority={props.priority}/>
            </Box>
            <Divider variant="middle"/>
            <Description description={props.description} setIsOpenMoreInformation={setIsOpenMoreInformation}/>
            <AllInformationOfTask isOpenMoreInformation={isOpenMoreInformation}
                                  setIsOpenMoreInformation={setIsOpenMoreInformation}
                                  {...props}/>
        </CardContent>
    );
}

export default TaskContent;
