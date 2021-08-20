import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import {Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {AddProjectFormType} from "./AddProjectFormContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect} from "react-router-dom";
import SelectionOfMultipleUsers from "./SelectionOfMultipleUsers";
import {userType} from "../../types/types";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 20,
    },
    button: {
        marginLeft: "auto"
    }
}));

const AddProjectForm: React.FC<AddProjectFormType> = function (props: AddProjectFormType) {

    const classes = useStyles();

    // массив пользователей которые будут работать над проектом
    const [selectedUsers, setSelectedUsers] = useState<Array<userType>>([props.currentUser])

    // индикатор что массив пользователей не удовлетворительный (не содержит создателя или пустой)
    const [isError, setIsError] = useState(false)

    // индикатор того отправлялись данные формы или нет хотя бы один раз
    const [submited, setSubmited] = useState(false)

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({mode: 'onChange'});

    // проверяем массив пользователей после каждого его изменения, испровляя в зависимости от этого isError
    useEffect(() => {
        selectedUsers.length === 0 && (submited || !selectedUsers.map(el => el.id).includes(props.currentUser.id))
            ? setIsError(true) : setIsError(false)
    }, [selectedUsers])

    type formDataType = {
        name: string
    }

    const onSubmit = (formData: formDataType) => {
        setSubmited(true)
        if (selectedUsers.length === 0 || !selectedUsers.map(el => el.id).includes(props.currentUser.id)) {
            setIsError(true)
        } else {
            props.addNewProject({name: formData.name, developersId: selectedUsers.map(el => el.id)})
            props.addProjectInArrayOfUsers(
                {
                    users: selectedUsers.map(el => el.id),
                    projectId: props.projects[props.projects.length-1].id + 1 //id позже нужно будет лучше ораганизовать
                })
            reset()
            setSelectedUsers([])
            setSubmited(false)
            setIsError(false)
        }

    }


    return (
        <div>
            <Typography variant={'h6'}
                        color={'primary'}>{`Сreating a project`}</Typography>
            {/*проверяем есть ли у пользователя доступ к созданию проектов*/}
            {props.currentUser.accesses.includes(4) ?
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Container className={classes.container}>
                        <Grid spacing={2} container>
                            <Grid item xs={12} md={12}><TextField variant={"outlined"} fullWidth required
                                                                  error={errors.name ? true : false}
                                                                  helperText={errors.name ? 'enter task name' : null}
                                                                  {...register('name', {required: true})}
                                                                  name={'name'}
                                                                  label="name of project"/>
                                <br/></Grid>
                            <Grid item xs={12} md={12}>
                                <SelectionOfMultipleUsers {...props} isError={isError} selectedUsers={selectedUsers}
                                                          setSelectedUsers={setSelectedUsers}/>
                            </Grid>
                        </Grid>
                        <Button className={classes.container} color={'primary'} size={"large"} type={'submit'}
                                variant={"contained"}>
                            create a new project
                        </Button>
                    </Container>
                </form> : <Redirect to={'/projects'}/>}
        </div>
    );
}

export default AddProjectForm;
