import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectPlayers, selectPlayersId, selectUsers} from "../../../redux/Users/UsersSlice";
import Player from "./Player";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import {setPlayers} from "../../../redux/game/GameSlice";

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

export function PlayerSelector() {
    const [selectedPlayers, setSelectedPlayers] = React.useState(['', '', '', ''])
    const [player1, setPlayer1] = React.useState('')
    const [player2, setPlayer2] = React.useState('')
    const [player3, setPlayer3] = React.useState('')
    const [player4, setPlayer4] = React.useState('')


    const classes = useStyles()

    const checkPosition = (newValue) => {
        const tmpSelectedPlayers = selectedPlayers.filter((e => e === newValue))
        return (tmpSelectedPlayers.length === 0)
    }

    const user = useSelector(selectUsers)
    const handleChangePlayer1 = (event) => {
        if (checkPosition(event.target.value)) {
            const tmpSelectedPlayers = selectedPlayers
            tmpSelectedPlayers[0] = event.target.value
            setPlayer1(event.target.value);
            setSelectedPlayers(tmpSelectedPlayers)
        }
    };
    const handleChangePlayer2 = (event) => {
        if (checkPosition(event.target.value)) {
            const tmpSelectedPlayers = selectedPlayers
            tmpSelectedPlayers[1] = event.target.value
            setPlayer2(event.target.value);
            setSelectedPlayers(tmpSelectedPlayers)
        }
    }

    const handleChangePlayer3 = (event) => {
        if (checkPosition(event.target.value)) {
            const tmpSelectedPlayers = selectedPlayers
            tmpSelectedPlayers[2] = event.target.value
            setPlayer3(event.target.value);
            setSelectedPlayers(tmpSelectedPlayers)
        }

    };
    const handleChangePlayer4 = (event) => {
        if (checkPosition(event.target.value)) {
            const tmpSelectedPlayers = selectedPlayers
            tmpSelectedPlayers[3] = event.target.value
            setPlayer4(event.target.value);
            setSelectedPlayers(tmpSelectedPlayers)
        }
    };
    const dispatch = useDispatch()
    const submit = () => {
        dispatch(dispatch(setPlayers(([player1,player2,player3,player4]))))
    }

    return (
        <Box className={classes.box}>
            <Grid container spacing={8} justify={"space-around"}>

                <Grid item>
                    <Grid container justify={"center"} direction={"column"} spacing={2}>
                        <Grid item>
                            <h3 style={{textAlign: "center"}}>Player 1</h3>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            <Select
                                id={toString(1)}
                                value={player1}
                                onChange={handleChangePlayer1}
                                displayEmpty
                                className={classes.select}
                                label={"diabled"}
                                style={{textAlign: "center"}}
                            >
                                {user.map((u) => {
                                    return (
                                        <MenuItem key={"MenuItemKey" + u._id} value={u._id}
                                                  name={"dsf"}>{u.name}</MenuItem>)
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify={"center"} direction={"column"} spacing={2}>
                        <Grid item>
                            <h3 style={{textAlign: "center"}}>Player 2</h3>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            <Select
                                value={player2}
                                onChange={handleChangePlayer2}
                                displayEmpty
                                className={classes.select}
                                label={"diabled"}
                                style={{textAlign: "center"}}
                            >
                                {user.map((u) => {
                                    return (
                                        <MenuItem key={"MenuItemKey" + u._id} value={u._id}
                                                  name={"dsf"}>{u.name}</MenuItem>)
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify={"center"} direction={"column"} spacing={2}>
                        <Grid item>
                            <h3 style={{textAlign: "center"}}>Player 3</h3>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            <Select
                                value={player3}
                                onChange={handleChangePlayer3}
                                displayEmpty
                                className={classes.select}
                                label={"diabled"}
                                style={{textAlign: "center"}}
                            >
                                {user.map((u) => {
                                    return (
                                        <MenuItem key={"MenuItemKey" + u._id} value={u._id}
                                                  name={"dsf"}>{u.name}</MenuItem>)
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify={"center"} direction={"column"} spacing={2}>
                        <Grid item>
                            <h3 style={{textAlign: "center"}}>Player 4</h3>
                        </Grid>
                        <Grid item style={{width: "100%"}}>
                            <Select
                                value={player4}
                                onChange={handleChangePlayer4}
                                displayEmpty
                                className={classes.select}
                                label={"diabled"}
                                style={{textAlign: "center"}}
                            >
                                {user.map((u) => {
                                    return (
                                        <MenuItem key={"MenuItemKey" + u._id} value={u._id}
                                                  name={"dsf"}>{u.name}</MenuItem>)
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} alignItems={"center"} alignContent={"center"} justify={"center"}>
                    <Grid item>
                        <Button onClick={submit}>Begin Round</Button>
                    </Grid>

                </Grid>
            </Grid>

        </Box>
    );

}


export default PlayerSelector;