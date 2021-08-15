import React, {useMemo, useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {userType} from "../../../types/types";
import {Avatar, Box, Checkbox, Chip, Container, Grid, Paper} from "@material-ui/core";

type ListOfUsersPropsType = {
    users: Array<userType>
    selectedUsers: Array<userType> | any[]
    setSelectedUsers: (arg0: Array<userType> | any[]) => void
}

const ListOfUsers: React.FC<ListOfUsersPropsType> = function (props: ListOfUsersPropsType) {

    const listOfUsers = props.users.map(el =>
        <MenuItem
            onClick={() => {
                props.selectedUsers.includes(el) ? props.setSelectedUsers([...props.selectedUsers.filter(user => el.id !== user.id)])
                    : props.setSelectedUsers([...props.selectedUsers, el])
            }}>
            <Checkbox
                checked={props.selectedUsers.includes(el)}
                inputProps={{'aria-label': 'Checkbox A'}}
            />
            {`${el.name} ${el.surname} (${el.position})`}
        </MenuItem>)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button fullWidth onClick={handleClick} endIcon={<MoreVertIcon/>} color={'primary'}
                    size={"large"} variant={"contained"}>select team</Button>
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

export default ListOfUsers;
