import React, {useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {userType} from "../../../types/types";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
    },
    menuItem: {
        backgroundColor: indigo[100],
    },
    list: {
        maxHeight: 500,
        overflow: "auto",
    },
    avatar: {
        color: theme.palette.primary.main,
        backgroundColor: 'white',
        marginRight: 5
    }
}));

type UserSelectionMenuPropsType = {
    setCurrentUser: (payload: userType) => void
    setCurrentProjectId: (payload: {currentProject: number | null}) => void
    users: Array<userType>
    currentUser: userType
    currentProjectId: number | null
}

const UserSelectionMenu: React.FC<UserSelectionMenuPropsType> = function ({setCurrentUser, setCurrentProjectId, currentUser, users, currentProjectId, ...props}:UserSelectionMenuPropsType) {
    const classes = useStyles();

    const listOfUsers = users.map(el => <MenuItem key={el.id} className={currentUser.id === el.id? classes.menuItem : ''}
                                                  onClick={() => {
                                                      setCurrentUser(el);
                                                      setCurrentProjectId(
                                                          el.projects.length === 0
                                                              ? {currentProject: null}
                                                              : {currentProject: el.projects.includes(currentProjectId)? currentProjectId : el.projects[0]});
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
                <Avatar className={classes.avatar}>{`${currentUser.name.substr(0, 1)}${currentUser.surname.substr(0, 1)}`}</Avatar>
                {`${currentUser.name}`}
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.list}
            >
                {listOfUsers}
            </Menu>
        </div>
    );
}

export default UserSelectionMenu;
