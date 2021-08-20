import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import {FilledInput, Input, Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {AddAccessesFormType} from "./AddUserFormContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect} from "react-router-dom";
import {userType} from "../../types/types";
import ChoiceOfAccessLevels from "./ChoiceOfAccessLevels";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10,
    },
    button: {
        marginLeft: "auto"
    }
}));

const AddUserForm: React.FC<AddAccessesFormType> = function (props: AddAccessesFormType) {

    const classes = useStyles();

    // массив уровней доступа нового пользователя
    const [selectedAccesses, setSelectedAccesses] = useState<Array<number> | any[]>([])

    // индикатор что массив уровней доступа не пустой
    const [isError, setIsError] = useState(false)

    // индикатор того отправлялись данные формы или нет хотя бы один раз
    const [submited, setSubmited] = useState(false)

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm({mode: 'onChange'});

    // проверяем массив уровней доступа после каждого его изменения, испровляя в зависимости от этого isError
    useEffect(() => {
        selectedAccesses.length === 0 && submited
            ? setIsError(true) : setIsError(false)
    }, [selectedAccesses])

    type formDataType = {
        name: string
        surname: string
        position: string
        accesses: Array<number>
    }

    const onSubmit = (formData: formDataType) => {
        setSubmited(true)
        if (selectedAccesses.length === 0) {
            setIsError(true)
        } else {
            props.addUser({
                name: formData.name,
                surname: formData.surname,
                position: formData.position,
                accesses: selectedAccesses
            })
            reset()
            setSelectedAccesses([])
            setSubmited(false)
            setIsError(false)
        }
    }


    return (
        <div>
            <Typography variant={'h6'} color={'primary'}>{'Сreating new user'}</Typography>
            {props.currentUser.accesses.includes(5) ?
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <Container className={classes.container}>
                        <Grid spacing={2} container>
                            <Grid item xs={12} md={6}><TextField variant={"outlined"} fullWidth required
                                                                 error={errors.name ? true : false}
                                                                 helperText={errors.name ? 'enter user name' : null}
                                                                 {...register('name', {required: true})} name={'name'}
                                                                 label="name"/>
                                <br/></Grid>
                            <Grid item xs={12} md={6}><TextField variant={"outlined"} fullWidth
                                                                 required {...register('surname', {required: true})}
                                                                 error={errors.surname ? true : false}
                                                                 helperText={errors.surname ? 'enter user surname' : null}
                                                                 name={'surname'} label="surname"/>
                                <br/></Grid>
                            <Grid item xs={12}><TextField variant={"outlined"} fullWidth
                                                          required {...register('position', {required: true})}
                                                          error={errors.position ? true : false}
                                                          helperText={errors.position ? 'enter user position' : null}
                                                          name={'position'} label="position"/>
                                <br/></Grid>
                            <Grid item xs={12} md={12}>
                                <ChoiceOfAccessLevels selectedAccesses={selectedAccesses}
                                                      setSelectedAccesses={setSelectedAccesses}
                                                      isError={isError} addUser={props.addUser}/>
                            </Grid>
                        </Grid>
                        <Button className={classes.container} color={'primary'} size={"large"} type={'submit'}
                                variant={"contained"}>
                            create new user
                        </Button>
                    </Container>
                </form> : <Redirect to={'/projects'}/>}
        </div>
    );
}

export default AddUserForm;
