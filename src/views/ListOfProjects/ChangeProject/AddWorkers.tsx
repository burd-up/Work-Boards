import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {projectType, userType} from "../../../types/types";
import SelectionOfAvailableUsers from "./SelectionOfAvailableUsers";

type AddWorkersPropsType = {
    setIsOpenMenuAddingWorkers: (arg: boolean) => void
    isOpenMenuAddingWorkers: boolean
    project: projectType
    availableUsers: Array<userType>
    addNewUserToProject: (payload: {users: Array<userType>, projectId: number}) => void
    addProjectInArrayOfUsers: (payload: {users: Array<number>, projectId: number}) => void
}

const useStyles = makeStyles(theme => ({
    dialogContent: {
        overflow: "hidden",
        overflowY: 'hidden',
    },
    placeForMessages: {
        minHeight: 165,
        maxHeight: 400,
        marginTop: 10,
        marginBottom: 10,
        overflowY: 'auto'
    },
    inputMessage: {
        marginBottom: 5,
    },
    button: {
        width: 180
    }
}));

const AddWorkers: React.FC<AddWorkersPropsType> = function (props: AddWorkersPropsType) {

    const classes = useStyles();

    // массив пользователей которые добавятся для работы над проектом
    const [selectedUsers, setSelectedUsers] = useState<Array<userType>>([])

    const onSubmit = () => {
        props.addNewUserToProject({projectId: props.project.id, users: selectedUsers});
        props.addProjectInArrayOfUsers({users: selectedUsers.map(el => el.id), projectId: props.project.id});
        props.setIsOpenMenuAddingWorkers(false);
        setSelectedUsers([]);
    }

    return (
        <Dialog
            fullWidth={true}
            open={props.isOpenMenuAddingWorkers}
            onClose={() => props.setIsOpenMenuAddingWorkers(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography variant={'h6'} color={'primary'} align={"center"}>
                    {`Adding workers to the project: "${props.project.name}"`}
                </Typography>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <SelectionOfAvailableUsers projectId={props.project.id} availableUsers={props.availableUsers}
                                           selectedUsers={selectedUsers} onSubmit={onSubmit} setSelectedUsers={setSelectedUsers}/>
            </DialogContent>
        </Dialog>
    );
}

export default AddWorkers;
