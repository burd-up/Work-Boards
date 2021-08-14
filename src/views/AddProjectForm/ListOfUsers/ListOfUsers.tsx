import React, {useMemo, useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {userType} from "../../../types/types";
import {Avatar, Box, Checkbox, Chip, Container, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 5,
        minHeight: 32,
    },
    grid: {
        padding: 0,
    }
}));

type ListOfUsersPropsType = {
    users: Array<userType>
    currentUser: userType
    currentProjectId: number
    selectedUsers: Array<userType> | any[]
    setSelectedUsers: (arg0: Array<userType> | any[]) => void
}

const ListOfUsers: React.FC<ListOfUsersPropsType> = function (props: ListOfUsersPropsType) {
    const classes = useStyles();

    const listOfUsers = props.users.map(el => <MenuItem
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

    const selectedUsers = props.selectedUsers.map(el =>
        <Grid item>
            <Chip
                avatar={<Avatar>{el.name.split('')[0]}{el.surname.split('')[0]}</Avatar>}
                label={`${el.name} ${el.surname} (${el.position})`}
                color="primary"
                clickable
                onDelete={() => props.setSelectedUsers([...props.selectedUsers.filter(user => el.id !== user.id)])}
            /></Grid>)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid className={classes.grid} container spacing={1} direction={'row'} alignItems={"flex-start"}>
            <Grid item xs={9} md={10}>
                <Paper className={classes.paper}>
                    {props.selectedUsers.length === 0 ? 'select workers for the project' :
                        <Grid container spacing={1} direction={'row'}>
                            {selectedUsers}
                        </Grid>
                    }
                </Paper>
            </Grid>
            <Grid item xs={3} md={2}>
                <Button onClick={handleClick} endIcon={<MoreVertIcon/>} color={'primary'}
                        size={"large"} variant={"contained"}>select team</Button>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {listOfUsers}
                </Menu>
            </Grid>
        </Grid>
    );
}

export default ListOfUsers;
