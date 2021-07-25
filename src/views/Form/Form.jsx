import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import {FilledInput} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";


function Form(props) {

    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({mode: 'onChange'});

    console.log(errors)
    const onSubmit = (formData) => {
        console.log("i work!!!" + formData)

    }


    return (
        <Box height={'100%'} p={0} m={0}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <TextField fullWidth required error={errors.name ? true : false} width={60}
                               helperText={errors.name ? 'incorrect name' : null}
                               {...register('name', {required: true})} name={'name'} label="Name"/><br/>
                    <TextField fullWidth required {...register('city')} name={'city'} label="City"/><br/>
                    <TextField fullWidth required {...register('country')} label="Country"/><br/>
                    <Button size={"large"} type="submit" label="Submit">
                        submit
                    </Button>
                </Container>
            </form>
        </Box>
    );
}

export default Form;
