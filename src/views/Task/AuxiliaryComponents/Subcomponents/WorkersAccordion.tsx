import React from "react";
import Typography from "@material-ui/core/Typography";
import {Accordion, AccordionDetails, List, ListItemText} from "@material-ui/core";
import {AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {userType} from "../../../../types/types";

type WorkersAccordionPropsType =  {
    creator: userType | null
    developer: userType | null
    tester: userType | null
}

const WorkersAccordion: React.FC<WorkersAccordionPropsType> = function (props: WorkersAccordionPropsType) {
    return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Current workers</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItemText
                                    primary={`${props.creator?.name} ${props.creator?.surname}`}
                                    secondary={'creator'}
                                />
                                {props.developer && <ListItemText
                                    primary={`${props.developer?.name} ${props.developer?.surname}`}
                                    secondary={'developer'}
                                />}
                                {props.tester && <ListItemText
                                    primary={`${props.tester?.name} ${props.tester?.surname}`}
                                    secondary={'tester'}
                                />}
                            </List>
                        </AccordionDetails>
                    </Accordion>
    );
}

export default WorkersAccordion;
