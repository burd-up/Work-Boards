import React from "react";
import {Chip, Paper, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {rowAccessLevels} from "../../utils/selectors/rowAccessLevels";
import ListOfAccesses from "./ListOfAccesses/ListOfAccesses";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 5,
        minHeight: 32,
    },

}));

type selectionAccessesPropsType = {
    selectedAccesses: Array<number> | any[]
    setSelectedAccesses: (arg0: Array<number> | any[]) => void
    isError: boolean
    addUser: (payload: {name: string, surname: string, position: string, accesses: Array<number>}) => void
}

const ChoiceOfAccessLevels: React.FC<selectionAccessesPropsType>
    = function ({selectedAccesses,setSelectedAccesses, isError,...props}: selectionAccessesPropsType) {

    const classes = useStyles();
    console.log( rowAccessLevels(selectedAccesses))
    console.log( selectedAccesses)

    const selectedUsersView = rowAccessLevels(selectedAccesses).map(el =>
        <Grid item key={el.num}>
            <Chip
                label={el.row}
                color="primary"
                clickable
                onDelete={() => setSelectedAccesses([...selectedAccesses.filter(access => access !== el.num)])}
            /></Grid>)

    return (
        <Grid container spacing={1} direction={'row'} alignItems={"flex-start"}>
            <Grid item xs={12} sm={9}>
                <Paper className={classes.paper}>
                    {selectedAccesses.length === 0 ? <Typography variant={'subtitle1'}
                                                              color={'textSecondary'}
                                                              align={'left'}>select accesses for new user *</Typography>
                        : <Grid container spacing={1} direction={'row'}>
                            {selectedUsersView}
                        </Grid>
                    }
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
                <ListOfAccesses
                             setSelectedAccesses={setSelectedAccesses}
                             selectedAccesses={selectedAccesses}/>
            </Grid>
            {isError && <Typography variant={'caption'}
                        color={isError? 'error':'textSecondary'}
                        align={'right'}>select accesses for new user</Typography>}
        </Grid>
    );
}

export default ChoiceOfAccessLevels;
