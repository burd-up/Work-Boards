import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import TaskContent from "./AuxiliaryComponents/TaskContent";

function CurrentTask(props) {

    return (
        <Card>
            <TaskContent title={props.title}
                         priority={props.priority}
                         description={props.description}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <Button color={'primary'} onClick={props.takeTask}
                        endIcon={<LibraryAddOutlinedIcon/>}
                        size="midle">take a task</Button>
            </Box>
        </Card>
    );
}

export default CurrentTask;
