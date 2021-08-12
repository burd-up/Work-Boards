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

type DrawerMenuPropsType = {
    accessLevel: number
    isOpenLeftMenu: boolean
    setIsOpenLeftMenu: (arg: boolean) => void
}
type ListPropsType = {
    url: string
    text: string
    icon: any
}


const useStyles = makeStyles({
    list: {
        width: 250,
        color: "unset",
        textDecoration: "none"
    },
    fullList: {
        width: 'auto',
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const List = (props: ListPropsType) => {
    const classes = useStyles();

    return (
        <NavLink to={props.url? props.url : '/boards'} className={classes.list}>
            <ListItem button key={props.text}>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.text}/>
            </ListItem>
        </NavLink>
    )
}

function DrawerMenu(props:DrawerMenuPropsType) {

    return (
        <Drawer variant={'persistent'} open={props.isOpenLeftMenu}>
            <Box display="flex" p={1}>
                <Box alignSelf={'center'} flexGrow={1} p={1}>
                    <Typography variant="subtitle1">WorkBoards v0.01</Typography>
                </Box>
                <Box p={1} alignSelf={'center'} justifyContent="flex-end">
                    <IconButton edge="start"
                                onClick={() => props.setIsOpenLeftMenu(false)}
                                color="primary" aria-label="menu">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Box>
            </Box>
            <List url={'/projects'} icon={<AccountTreeIcon/>} text={"Projects"}/>
            <List url={'/boards'} icon={<DashboardIcon/>} text={"Current project"}/>
            <List url={'/currentTasks'} icon={<ListAltIcon/>} text={"My tasks"}/>
            {props.accessLevel === 3 && <List url={'/form'} icon={<PlaylistAddIcon/>} text={"Add tasks"}/>}
            {props.accessLevel === 3 && <List url={'/form'} icon={<NoteAddIcon/>} text={"Add boards"}/>}
        </Drawer>
    );
}

export default DrawerMenu;
