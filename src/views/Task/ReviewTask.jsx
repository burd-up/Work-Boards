import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TaskContent from "./AuxiliaryComponents/TaskContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

function ReviewTask(props) {

    return (
        <Card>
            <TaskContent title={'Make something'} priority={6}
                         description={'There is no consensus on the right way to organize a React application. ' +
                         'React gives you a lot of freedom, but with that freedom comes the responsibility of deciding on your own architecture.'}
            />
            <Box display={'flex'} justifyContent="flex-end" m={1}>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button color={'secondary'} endIcon={<RateReviewOutlinedIcon/>}
                            size="midle">for revision</Button>
                    <Button color={'primary'} endIcon={<ThumbUpAltOutlinedIcon/>}
                            size="midle">approve</Button>
                </ButtonGroup>
            </Box>
        </Card>
    );
}

export default ReviewTask;
