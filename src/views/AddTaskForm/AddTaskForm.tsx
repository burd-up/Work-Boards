import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import {Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {AddTaskFormType} from "./AddTaskFormContainer";
import {makeStyles} from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
    },
    button: {
        marginLeft: "auto"
    }
}));

const AddTaskForm: React.FC<AddTaskFormType> = function (props: AddTaskFormType) {

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
            <Typography variant={'h6'} color={'primary'}>
                {`Сreating a task for the project: "${props.currentProjectName}"`}
            </Typography>
            {props.currentUser.accesses.includes(3) && props.currentProjectId !== null?
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Container className={classes.container}>
                <Grid spacing={2} container>
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
                </Grid>
                <Button className={classes.container} color={'primary'} size={"large"} type={'submit'}
                        variant={"contained"}>
                    create a new task
                </Button>
            </Container>
        </form> : <Redirect to={'/projects'}/>}
        </div>
    );
}

export default AddTaskForm;
