import React, {useEffect, useMemo, useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import {FilledInput, Input, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {AddProjectFormType} from "./AddProjectFormContainer";
import {makeStyles} from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import ListOfUsers from "./ListOfUsers/ListOfUsers";
import {userType} from "../../types/types";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10,
    },
    button: {
        marginLeft: "auto"
    }
}));

const SelectionOfMultipleUsers: React.FC<AddProjectFormType> = function (props: AddProjectFormType) {

    const classes = useStyles();

    const [selectedUsers, setSelectedUsers] = useState<Array<userType> | never[]>([])

    const addSelectUser = (arg0: Array<userType> | never[]) => {setSelectedUsers(arg0)}

    useEffect(() => {
    });

    return (
                <ListOfUsers users={props.users} currentUser={props.currentUser}
                             currentProjectId={props.currentProjectId} setSelectedUsers={addSelectUser}
                             selectedUsers={selectedUsers}/>

    );
}

export default SelectionOfMultipleUsers;
