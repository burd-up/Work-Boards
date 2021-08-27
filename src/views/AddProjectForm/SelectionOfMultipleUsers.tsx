import React from "react";
import {Avatar, Chip, Paper, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import {AddProjectFormType} from "./AddProjectFormContainer";
import {makeStyles} from "@material-ui/core/styles";
import ListOfUsers from "./ListOfUsers/ListOfUsers";
import {userType} from "../../types/types";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 5,
        minHeight: 32,
    },

}));

type selectionOfMultipleUsersPropsType = AddProjectFormType & {
    selectedUsers: Array<userType> | never[]
    setSelectedUsers: (arg0: Array<userType> | never[]) => void
    isError: boolean
}

const SelectionOfMultipleUsers: React.FC<selectionOfMultipleUsersPropsType>
    = function ({selectedUsers,setSelectedUsers, isError,...props}: selectionOfMultipleUsersPropsType) {

    const classes = useStyles();

    const selectedUsersView = selectedUsers.map(el =>
        <Grid item key={el.id}>
            <Chip
                avatar={<Avatar>{el.name.split('')[0]}{el.surname.split('')[0]}</Avatar>}
                label={`${el.name} ${el.surname} (${el.position})`}
                color="primary"
                clickable
                onDelete={() => setSelectedUsers([...selectedUsers.filter(user => el.id !== user.id)])}
            /></Grid>)

    return (
        <Grid container spacing={1} direction={'row'} alignItems={"flex-start"}>
            <Grid item xs={12} sm={9}>
                <Paper className={classes.paper}>
                    {selectedUsers.length === 0 ? <Typography variant={'subtitle1'}
                                                              color={'textSecondary'}
                                                              align={'left'}>select workers for the project *</Typography>
                        : <Grid container spacing={1} direction={'row'}>
                            {selectedUsersView}
                        </Grid>
                    }
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
                <ListOfUsers users={props.users}
                             setSelectedUsers={setSelectedUsers}
                             selectedUsers={selectedUsers}/>
            </Grid>
            {isError && <Typography variant={'caption'}
                        color={isError? 'error':'textSecondary'}
                        align={'right'}>select workers for the project (you must be on the list)</Typography>}
        </Grid>
    );
}

export default SelectionOfMultipleUsers;
