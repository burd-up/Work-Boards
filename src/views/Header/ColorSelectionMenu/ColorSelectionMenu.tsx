import React, {useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import indigo from "@material-ui/core/colors/indigo";
import {HeaderPropsType} from "../HeaderContainer";
import {colorsThemeType} from "../../../types/types";
import {Avatar, Box, Grid} from "@material-ui/core";
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';

const uniqueUseStyles = (color: string) => {
    return makeStyles((theme) => ({
        avatar: {
            backgroundColor: color,
        },
    }))()
};

const useStyles = makeStyles((theme) => ({
        box: {
            maxHeight: 200,
            overflowY: 'auto'
        },
        icon: {
            color: theme.palette.primary.contrastText
        }
    }))

type ColorSelectionMenuPropsType = {
    colors: Array<colorsThemeType>
    setCurrentColor: (payload: { name: string }) => void
    currentColor: colorsThemeType
    setColor: (param: {
        palette: {
            primary: { main: string }, secondary: { main: string }
        }
    }) => void
};

const ColorSelectionMenu: React.FC<ColorSelectionMenuPropsType> = function (
    {colors, setCurrentColor, currentColor, setColor}: ColorSelectionMenuPropsType) {

    const classes = useStyles();

    const listOfColor = colors.map(el => {
        return (
            <MenuItem onClick={() => {
                setCurrentColor({name: el.name});
                setColor({
                    palette: {
                        primary: {main: el.primary.main},
                        secondary: {main: el.secondary.main}
                    }
                })
                handleClose()
            }}>
                <Avatar className={uniqueUseStyles(el.primary.main).avatar}>
                    <ColorLensOutlinedIcon/>
                </Avatar>
            </MenuItem>
        )
    });

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div>
            <Button onClick={handleClick}>
                <Avatar className={uniqueUseStyles(currentColor.primary.main).avatar}>
                    <ColorLensOutlinedIcon className={classes.icon}/>
                </Avatar>
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Box className={classes.box}>
                {listOfColor}
                </Box>
            </Menu>
        </div>
    );
}

export default ColorSelectionMenu;
