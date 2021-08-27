import React, {useState} from "react";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {Checkbox} from "@material-ui/core";
import {rowAccessLevels} from "../../../utils/selectors/rowAccessLevels";

type ListOfAccessesPropsType = {
    selectedAccesses: Array<number> | any[]
    setSelectedAccesses: (arg0: Array<number> | any[]) => void
}

// массим объектов {row: строка с названием, num: номер доступа}
const accesses = rowAccessLevels([1,2,3,4,5])

const ListOfAccesses: React.FC<ListOfAccessesPropsType> = function (props: ListOfAccessesPropsType) {

    const listOfAccesses = accesses.map(el =>
        <MenuItem
            onClick={() => {
                props.selectedAccesses.includes(el.num) ? props.setSelectedAccesses(
                    [...props.selectedAccesses.filter(access => el.num !== access)])
                    : props.setSelectedAccesses([...props.selectedAccesses, el.num])
            }}>
            <Checkbox
                checked={props.selectedAccesses.includes(el.num)}
                inputProps={{'aria-label': 'Checkbox A'}}
            />
            {el.row}
        </MenuItem>)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button fullWidth onClick={handleClick} endIcon={<MoreVertIcon/>} color={'primary'}
                    size={"large"} variant={"contained"}>select accesses</Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {listOfAccesses}
            </Menu>
        </div>
    );
}

export default ListOfAccesses;
