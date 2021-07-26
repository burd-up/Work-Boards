import React, {useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {setCurrentUser} from "../../../store/users-reducer";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
    menuItem: {
        backgroundColor: indigo[100],
    }
}));

function UserSelectionMenu(props) {
    const classes = useStyles();

    const users = useSelector((state) => state.users.users)
    const currentUser = useSelector((state) => state.users.currentUser)
    const dispatch = useDispatch()

    const listOfUsers = users.map(el => <MenuItem className={currentUser.id === el.id && classes.menuItem}
                                                  onClick={() => {dispatch(setCurrentUser(el)); handleClose()}}>
        {`${el.name} ${el.surname} (${el.position})`}
    </MenuItem>)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
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
