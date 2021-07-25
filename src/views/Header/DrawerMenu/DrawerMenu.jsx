import React, {useState} from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from "@material-ui/core/Grid";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {NavLink} from "react-router-dom";

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

const List = (props) => {
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

function DrawerMenu(props) {

    return (
        <Drawer variant={'persistent'} open={props.isOpenLeftMenu}>
            <Box display="flex" p={1}>
                <Box alignSelf={'center'} flexGrow={1} p={1}>
                    <Typography variant="h8">WorkBoards v0.01</Typography>
                </Box>
                <Box p={1} alignSelf={'center'} justifyContent="flex-end">
                    <IconButton p={2} edge="start"
                                onClick={() => props.setIsOpenLeftMenu(false)}
                                color="gray" aria-label="menu">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Box>
            </Box>
            <List url={'/boards'} icon={<DashboardIcon/>} text={"Boards"}/>
            <List  icon={<ListAltIcon/>} text={"My tasks"}/>
            {props.isAdmin && <List url={'/form'} icon={<PlaylistAddIcon/>} text={"Add tasks"}/>}
            {props.isAdmin && <List icon={<NoteAddIcon/>} text={"Add boards"}/>}
        </Drawer>
    );
}

export default DrawerMenu;
