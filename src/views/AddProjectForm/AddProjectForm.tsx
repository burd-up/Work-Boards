import React from "react";
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
import SelectionOfMultipleUsers from "./SelectionOfMultipleUsers";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
    },
    button: {
        marginLeft: "auto"
    }
}));

const AddProjectForm: React.FC<AddProjectFormType> = function (props: AddProjectFormType) {

    const classes = useStyles();

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({mode: 'onChange'});

    type formDataType = {
        name: string
        description: string
        priority: number
    }

    const onSubmit = (formData: formDataType) => {
        props.addNewTaskToProject({
            currentUser: props.currentUser, name: formData.name,
            description: formData.description, priority: formData.priority
        })
        reset();
    }


    return (
        <div>
            <Typography variant={'h6'} color={'primary'}>{`Сreating a task for the project: "${props.currentProjectName}"`}</Typography>
            {props.currentUser.accessLevel === 3?
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Container className={classes.container}>
                <SelectionOfMultipleUsers {...props}/>
              {/*  <Grid spacing={2} container>
                    <Grid item xs={8} md={10}><TextField variant={"outlined"} fullWidth required
                                                         error={errors.name ? true : false}
                                                         helperText={errors.name ? 'enter task name' : null}
                                                         {...register('name', {required: true})} name={'name'} label="name"/>
                                                         <br/></Grid>
                    <Grid item xs={4} md={2}><TextField variant={"outlined"} fullWidth
                                                        required {...register('priority', {required: true, max: 10})}
                                                        error={errors.priority ? true : false} type={'number'}
                                                        helperText={errors.priority ? 'should be a value between 1 and 10' : null}
                                                        name={'priority'} label="priority"/>
                                                        <br/></Grid>
                    <Grid item xs={12}><TextField variant={"outlined"} fullWidth
                                                  required {...register('description', {required: true})}
                                                  error={errors.description ? true : false}
                                                  helperText={errors.description ? 'enter task description' : null}
                                                  name={'description'} label="description"/>
                                                  <br/></Grid>
                </Grid>*/}
                <Button className={classes.container} color={'primary'} size={"large"} type={'submit'}
                        variant={"contained"}>
                    create a new task
                </Button>
            </Container>
        </form> : <Redirect to={'/projects'}/>}
        </div>
    );
}

export default AddProjectForm;
