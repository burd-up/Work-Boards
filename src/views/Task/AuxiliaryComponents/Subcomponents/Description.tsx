import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    description: {
        maxHeight: 100,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));

type DescriptionPropsType = {
    description: string
    setIsOpenMoreInformation: (arg: boolean) => void
}

const Description: React.FC<DescriptionPropsType> = function (props: DescriptionPropsType) {


    const classes = useStyles();

    return (
        <Box>
            <Typography variant="body2" component="p" align={'left'} className={classes.description}>
                {props.description}
            </Typography>
            <Box display={'box'}>
                <Button onClick={() => props.setIsOpenMoreInformation(true)} size={'small'}>{'... learn more'}</Button>
            </Box>
        </Box>
    );
}

export default Description;
