import React from "react";
import Typography from "@material-ui/core/Typography";
import {Accordion, AccordionDetails, List, ListItemText} from "@material-ui/core";
import {AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {userType} from "../../../../types/types";

type WorkersAccordionPropsType =  {
    description: string
}

const DescriptionAccordion: React.FC<WorkersAccordionPropsType> = function (props: WorkersAccordionPropsType) {
    return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Description</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {props.description}
                        </AccordionDetails>
                    </Accordion>
    );
}

export default DescriptionAccordion;
