import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Priority from "./Priority";
import Description from "./Description";

function TaskContent(props) {

    return (
            <CardContent>
                <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
                    <Typography variant="h6" component="h2" display="inline">{props.title}</Typography>
                    <Priority priority={props.priority}/>
                </Box>
                <Divider variant="middle"/>
                <Description description={props.description}/>
            </CardContent>
    );
}

export default TaskContent;
