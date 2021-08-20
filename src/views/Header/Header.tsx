import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import DrawerMenu from "./DrawerMenu/DrawerMenu";
import UserSelectionMenu from "./UserSelectionMenu/UserSelectionMenu";
import {HeaderPropsType} from "./HeaderContainer";
import ColorSelectionMenu from "./ColorSelectionMenu/ColorSelectionMenu";


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header: React.FC<HeaderPropsType> = function (props:HeaderPropsType) {

    const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);

    const classes = useStyles();

    return (
        <Box width={'100%'}>
            <DrawerMenu currentProject={props.currentProject} accesses={props.currentUser.accesses}
                        isOpenLeftMenu={isOpenLeftMenu} setIsOpenLeftMenu={setIsOpenLeftMenu}
                        currentProjectId={props.currentProjectId}/>
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
                    <Box display={"flex"} alignItems="center">
                        <ColorSelectionMenu colors={props.colors} currentColor={props.currentColor}
                                            setCurrentColor={props.setCurrentColor} setColor={props.setColor}/>
                        <UserSelectionMenu users={props.users} setCurrentUser={props.setCurrentUser}
                                           currentUser={props.currentUser} currentProjectId={props.currentProjectId}
                                           setCurrentProjectId={props.setCurrentProjectId}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
