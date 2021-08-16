import React, {useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {HeaderPropsType} from "../HeaderContainer";
import {userType} from "../../../types/types";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
    },
    menuItem: {
        backgroundColor: indigo[100],
    }
}));

type UserSelectionMenuPropsType = {
    setCurrentUser: (payload: userType) => void
    setCurrentProjectId: (payload: {currentProject: number}) => void
    users: Array<userType>
    currentUser: userType
    currentProjectId: number
}

const UserSelectionMenu: React.FC<UserSelectionMenuPropsType> = function ({setCurrentUser, setCurrentProjectId, currentUser, users, currentProjectId, ...props}:UserSelectionMenuPropsType) {
    const classes = useStyles();

    const listOfUsers = users.map(el => <MenuItem className={currentUser.id === el.id? classes.menuItem : ''}
                                                  onClick={() => {
                                                      setCurrentUser(el);
                                                      setCurrentProjectId({currentProject: el.projects.includes(currentProjectId)? currentProjectId : el.projects[0]});
                                                      handleClose()
                                                  }}>
        {`${el.name} ${el.surname} (${el.position})`}
    </MenuItem>)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div>
            <Button className={classes.button} onClick={handleClick} endIcon={<MoreVertIcon/>}>
                {`${currentUser.name} ${currentUser.surname} (${currentUser.position})`}
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {listOfUsers}
            </Menu>
        </div>
    );
}

export default UserSelectionMenu;
