import React from "react";
import {Avatar, Chip, Paper, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {userType} from "../../../types/types";
import ListOfUsers from "../../AddProjectForm/ListOfUsers/ListOfUsers";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 5,
        minHeight: 58,
    },
    button: {
        marginTop: 5,
        marginBottom: 5
    }

}));

type selectionOfMultipleUsersPropsType = {
    projectId: number
    availableUsers: Array<userType>
    selectedUsers: Array<userType>
    setSelectedUsers: (arg: Array<userType>) => void
    onSubmit: () => void
}

const SelectionOfAvailableUsers: React.FC<selectionOfMultipleUsersPropsType>
    = function ({projectId, availableUsers, selectedUsers, setSelectedUsers, ...props}: selectionOfMultipleUsersPropsType) {

    const classes = useStyles();

    const selectedUsersView = selectedUsers.map(el =>
        <Grid item>
            <Chip
                avatar={<Avatar>{el.name.split('')[0]}{el.surname.split('')[0]}</Avatar>}
                label={`${el.name} ${el.surname} (${el.position})`}
                color="primary"
                clickable
                onDelete={() => setSelectedUsers([...selectedUsers.filter(user => el.id !== user.id)])}
            /></Grid>)

    return (
        <Grid container spacing={1} direction={'row'} alignItems={"flex-start"}>
            <Grid item sm={9} xs={12}>
                <Paper className={classes.paper}>
                    {selectedUsers.length === 0 ? <Typography variant={'subtitle1'}
                                                              color={'textSecondary'}
                                                              align={'left'}>select new workers for the project
                            *</Typography>
                        : <Grid container spacing={1} direction={'row'}>
                            {selectedUsersView}
                        </Grid>
                    }
                </Paper>
            </Grid>
            <Grid item sm={3} xs={12}>
                <ListOfUsers users={availableUsers}
                             setSelectedUsers={setSelectedUsers}
                             selectedUsers={selectedUsers}/>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Button className={classes.button} onClick={() => props.onSubmit()}
                        size={"large"} variant={"contained"} color={'primary'}>
                    Add to project</Button>
            </Grid>
        </Grid>
    );
}

export default SelectionOfAvailableUsers;
