import {Button, TableCell, TableRow} from "@material-ui/core";
import React from "react";
import {toggleIsNew} from "../../../../redux/person/PersonSlice";
import httpService from "../../../../services/httpService";
import {useDispatch} from "react-redux";

export default function UserTableRow(props) {
    const svc = new httpService()
    const dispatch = useDispatch()
    const deleteUser = (event) => {
        let usr = {}
        usr._id = event.target.attributes._id.value
        console.log(usr)
        svc.deleteUser(usr).then((res,err) => console.log("deleted " + err +" " + res ))
        dispatch(toggleIsNew())
    }

    return (
        <TableRow key={"key_data_user_row_" + props.user._id}>
            <TableCell>
                {props.user._id}
            </TableCell>
            <TableCell>
                {props.user.name}
            </TableCell>
            <TableCell>
                {props.user.age}
            </TableCell>
            <TableCell>
                {props.user.role}
            </TableCell>
            <TableCell>
                <button type={"submit"} _id={props.user._id}  onClick={(event) => {
                    deleteUser(event)
                }}>
                    Delete</button>
            </TableCell>
        </TableRow>
    )
}
