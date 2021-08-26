import React from "react";
import {Badge, Tab, } from "@material-ui/core";
import {taskType} from "../../../types/types";
import {unreadMessagesForProjectSelector} from "../../../utils/selectors/currentProject-selector";


type CustomTabPropsType = {
    label: string
    tasks: Array<taskType>
    currentUserId: number
}

const CustomTab: React.FC<CustomTabPropsType> = function (props: CustomTabPropsType) {



    return (
        <Tab icon={<Badge color="error" variant={"dot"}
                          badgeContent={unreadMessagesForProjectSelector({tasks: props.tasks}, props.currentUserId)}>
                {`${props.label} (${props.tasks.length})`}
            </Badge>}/>
    )
}


export default CustomTab;