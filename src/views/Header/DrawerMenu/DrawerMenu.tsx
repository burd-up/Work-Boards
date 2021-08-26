import React, {useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {NavLink} from "react-router-dom";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import {projectType} from "../../../types/types";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Badge} from "@material-ui/core";

type DrawerMenuPropsType = {
    accesses: Array<number>
    isOpenLeftMenu: boolean
    setIsOpenLeftMenu: (arg: boolean) => void
    currentProject: projectType | null
    currentProjectId: number | null
    messagesForCurrentProject: number
    messagesForAllProjects: number
}
type ListPropsType = {
    url: string
    text: string
    icon: any
    badgeContent?: number
}


const useStyles = makeStyles({
    list: {
        width: 250,
        color: "unset",
        textDecoration: "none"
    },
    fullList: {
        width: 180,
        height: 25,
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
});

const List = (props: ListPropsType) => {
    const classes = useStyles();

    return (
        <NavLink to={props.url ? props.url : '/boards'} className={classes.list}>
            <ListItem button key={props.text}>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.text}/>
                {props.badgeContent? <Badge color="error" badgeContent={props.badgeContent} variant={"dot"}/> : null}
            </ListItem>
        </NavLink>
    )
}

function DrawerMenu(props: DrawerMenuPropsType) {
    const classes = useStyles();

    return (
        <Drawer variant={'persistent'} open={props.isOpenLeftMenu}>
            <Box display="flex" p={1}>
                <Box alignSelf={'center'} flexGrow={1} p={1}>

                    <Typography className={classes.fullList} variant="subtitle1" color={"primary"}>
                        {props.currentProjectId === null ? "no projects available" : props.currentProject?.name}
                    </Typography>
                    <Typography variant="caption">WorkBoards v0.01</Typography>
                </Box>
                <Box p={1} alignSelf={'center'} justifyContent="flex-end">
                    <IconButton edge="start"
                                onClick={() => props.setIsOpenLeftMenu(false)}
                                color="primary" aria-label="menu">
                        <ArrowBackIosIcon/>
                    </IconButton>
                </Box>
            </Box>
                <List url={'/projects'} icon={<AccountTreeIcon/>} text={"Projects"} badgeContent={props.messagesForAllProjects}/>
            <List url={'/currentProject'} icon={<DashboardIcon/>} text={"Current project"} badgeContent={props.messagesForCurrentProject}/>
            <List url={'/currentTasks'} icon={<ListAltIcon/>} text={"My tasks"} badgeContent={props.messagesForCurrentProject}/>
            {props.accesses.includes(3) && <List url={'/addTaskForm'} icon={<PlaylistAddIcon/>} text={"Add tasks"}/>}
            {props.accesses.includes(4) && <List url={'/addProjectForm'} icon={<NoteAddIcon/>} text={"Add project"}/>}
            {props.accesses.includes(5) && <List url={'/addUserForm'} icon={<PersonAddIcon/>} text={"Add user"}/>}
        </Drawer>
    );
}

export default DrawerMenu;
