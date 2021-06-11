import React, {useEffect} from 'react';
import {Controller, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Box, Button, Card, FormLabel, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {selectPlayers, selectPlayersId, selectUsers} from "../../../redux/Users/UsersSlice";
import Player from "./Player";

const useStyles = makeStyles(() => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },
}));

export function PlayerSelector() {
    const [placeholder, setPlaceholder]= React.useState(["Default","Default","Default","Default"])
    const player = useSelector(selectPlayers)


    useEffect(() => {
        player.forEach((p) => {
            placeholder[p.id]=p.label
        })
        setPlaceholder(placeholder)
        console.log(placeholder)
            }, [player])




    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(player)
    };

    const classes = useStyles()

    const selectedUsers = []
    useSelector(selectUsers).map((user) => selectedUsers.push({value: user._id, label: user.name}))




    return (
        <Box className={classes.box}>
            <form onSubmit={handleSubmit(onSubmit)}>


                <Grid container spacing={8} justify={"space-around"}>
                    <Grid item>
                        <Grid container spacing={8}>
                            <Player users={selectedUsers} name={"Player 1"} id={"0"} placeholder={placeholder[0]}/>
                            <Player users={selectedUsers} name={"Player 2"} id={"1"} placeholder={placeholder[1]}/>


                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={8}>
                            <Player users={selectedUsers} name={"Player 3"} id={"2"} placeholder={placeholder[2]}/>
                            <Player users={selectedUsers} name={"Player 4"} id={"3"} placeholder={placeholder[3]}/> </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify={"center"}>
                            <Grid item>
                                <Card style={{alignItems: "center", width: "100%", textAlign: "center"}}>
                                    <Button type={"submit"}>Initiate Game</Button>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>


            </form>


        </Box>
    );
}


export default PlayerSelector;