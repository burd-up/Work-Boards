import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Switch from "@material-ui/core/Switch";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header(props) {

    const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);

    const classes = useStyles();

    return (
        <Box width={'100%'}>
            <DrawerMenu isAdmin={props.isAdmin} isOpenLeftMenu={isOpenLeftMenu} setIsOpenLeftMenu={setIsOpenLeftMenu}/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}
                                onClick={() => setIsOpenLeftMenu(true)}
                                color="inherit" aria-label="menu" >
                        <MenuIcon/>
                    </IconButton>
                    <Typography align={'left'} variant="h6" className={classes.title}>
                        WorkBoards
                    </Typography>
                    <Box>
                        <Typography variant="h8">admin</Typography>
                        <Switch onChange={() => props.setIsAdmin(!props.isAdmin)}/>
                        <Typography variant="h8">user</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
