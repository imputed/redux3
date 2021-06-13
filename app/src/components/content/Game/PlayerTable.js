import React, {useEffect} from 'react';

import {useSelector} from "react-redux";
import {Box, Button, Grid, Table} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectPlayers, selectPlayersId, selectUsers} from "../../../redux/Users/UsersSlice";
import Player from "./Player";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import {selectRoundPlayers} from "../../../redux/game/GameSlice";

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },

    button: {
        margin: 10
    },
    select: {
        minWidth: "200px"
    },
}));

export function PlayerTable() {

    const classes = useStyles()
    const players = useSelector(selectRoundPlayers)

      return (
        <Box className={classes.box}>
           <Table>

    {players.map((p)=>{
        return <h1>{p}</h1>
    })}

           </Table>

        </Box>
    );
}


export default PlayerTable;