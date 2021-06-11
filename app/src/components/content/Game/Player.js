import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Card, FormLabel, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Select from "react-select";
import {selectPlayers, selectUsers, setSelectPlayer, setSelectUsers} from "../../../redux/Users/UsersSlice";

export function Player(props) {
    const {control} = useForm();
    const selectedUsers = props.users
    const name = props.name
    const id = props.id
    const placeholder = props.placeholder
    const dispatch = useDispatch()

    const change = (ev) => {
        dispatch(setSelectPlayer({value: ev.value, id: id, label:ev.label}))
    }
    return (

        <Grid item>
            <Grid container justify={"center"} direction={"row"} spacing={2}>
                <Grid item>
                    <FormLabel>{name}</FormLabel>
                </Grid>
                <Grid item style={{width: "100%"}}>
                    <Controller
                        name={id}
                        control={control}
                        render={({field}) => <Select
                            {...field}
                            options={selectedUsers}
                            onChange={(ev) => change(ev)}
                            placeholder={placeholder}


                        />}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Player