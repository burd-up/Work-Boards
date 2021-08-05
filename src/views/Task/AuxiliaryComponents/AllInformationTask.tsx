import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {taskType} from "../../../types/types";
import {Accordion, AccordionDetails, Chip, List, ListItemText} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkersAccordion from "./Subcomponents/WorkersAccordion";
import green from "@material-ui/core/colors/green";
import Priority from "./Subcomponents/Priority";
import DescriptionAccordion from "./Subcomponents/DescriptionAccordion";
import TitleForDialog from "./Subcomponents/TitleForDialogOfTask";

type AllInformationTaskPropsType = taskType & {
    setIsOpenMoreInformation: (arg: boolean) => void
    isOpenMoreInformation: boolean
}

const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    },
    subTitle: {
        display: 'flex',
        alignItems: "center"
    },
}));

const AllInformationOfTask: React.FC<AllInformationTaskPropsType> = function (props: AllInformationTaskPropsType) {

    const classes = useStyles();

    return (
        <Dialog
            open={props.isOpenMoreInformation}
            onClose={() => props.setIsOpenMoreInformation(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
               <TitleForDialog name={props.name} status={props.status} priority={props.priority}/>
            </DialogTitle>
            <DialogContent>
                <WorkersAccordion creator={props.creator} developer={props.developer} tester={props.tester}/>
                <DescriptionAccordion description={props.description}/>
            </DialogContent>
        </Dialog>
    );
}

export default AllInformationOfTask;
