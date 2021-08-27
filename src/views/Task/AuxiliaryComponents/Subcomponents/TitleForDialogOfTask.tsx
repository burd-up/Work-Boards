import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Chip} from "@material-ui/core";
import Priority from "./Priority";


type TitleForDialogPropsType = {
    name: string
    priority: number
    status: 'newTask' | 'development' | 'testing' | 'ready'
}

const useStyles = makeStyles(theme => ({
    title: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    },
    subTitle: {
        display: 'flex',
        alignItems: "center",
        marginRight: 50
    },
}));

const TitleForDialog: React.FC<TitleForDialogPropsType> = function (props: TitleForDialogPropsType) {

    const classes = useStyles();

    return (
                <Box className={classes.title}>
                    <Box className={classes.subTitle}>
                        <Typography color={'primary'} variant={"h6"}>{props.name}</Typography>
                        <Priority priority={props.priority}/>
                    </Box>
                    <Chip label={props.status} color="primary"/>
                </Box>
    );
}

export default TitleForDialog;
