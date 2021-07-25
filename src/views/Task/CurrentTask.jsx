import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import TaskContent from "./AuxiliaryComponents/TaskContent";

function CurrentTask(props) {

    return (
        <Card>
            <TaskContent title={'Make something'} priority={6}
                         description={'There is no consensus on the right way to organize a React application. ' +
                         'React gives you a lot of freedom, but with that freedom comes the responsibility of deciding on your own architecture.'}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <Button color={'primary'} endIcon={<LibraryAddOutlinedIcon/>}
                        size="midle">take a task</Button>
            </Box>
        </Card>
    );
}

export default CurrentTask;
