import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {Box, Button, Card, FormLabel, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Select from "react-select";
import {selectUsers} from "../../../redux/Users/UsersSlice";

const useStyles = makeStyles(() => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },
}));

export function PlayerSelector() {
    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
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
                            <Grid item>
                                <Grid container justify={"center"} direction={"row"} spacing={2}>
                                    <Grid item>
                                        <FormLabel>Player 1</FormLabel>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <Controller
                                            name="player_1"
                                            control={control}
                                            render={({field}) => <Select
                                                {...field}
                                                options={selectedUsers}
                                            />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justify={"center"} direction={"row"} spacing={2}>
                                    <Grid item>
                                        <FormLabel>Player 2</FormLabel>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <Controller
                                            name="player_2"
                                            control={control}
                                            render={({field}) => <Select
                                                {...field}
                                                options={selectedUsers}
                                            />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={8}>
                            <Grid item>
                                <Grid container justify={"center"} direction={"row"} spacing={2}>
                                    <Grid item>
                                        <FormLabel>Player 3</FormLabel>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <Controller
                                            name="player_3"
                                            control={control}
                                            render={({field}) => <Select
                                                {...field}
                                                options={selectedUsers}
                                            />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justify={"center"} direction={"row"} spacing={2}>
                                    <Grid item>
                                        <FormLabel>Player 4</FormLabel>
                                    </Grid>
                                    <Grid item style={{width: "100%"}}>
                                        <Controller
                                            name="player_4"
                                            control={control}
                                            render={({field}) => <Select
                                                {...field}
                                                options={selectedUsers}
                                            />}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justify={"center"}>
                            <Grid item>
                                <Card style={{alignItems:"center",width:"100%", textAlign:"center"}}>
                                    <Button type={"submit"}>Submit</Button>
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