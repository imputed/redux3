import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, FormLabel, Grid, Input} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Select from "react-select";
import {selectUsers} from "../../../redux/Users/UsersSlice";
import UsersSlice from "../../../redux/Users/UsersSlice";

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        padding: 50,
        marginBottom: 10,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export function PlayerSelector() {
    const { control, handleSubmit } = useForm();

    const dispatch = useDispatch();


    const onSubmit = (data) => {

        const usr = {name: data["firstName"] + " " + data["lastName"], age: data["age"], role: data["role"].label}


    };

    const classes = useStyles()

    const slct = []
    useSelector(selectUsers).map((user,index) => slct.push({value: index, label: user.name}))

    return (
        <Box className={classes.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container justify={"center"} direction={"column"} spacing={8}>

                    <Grid item>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>First Name</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <Input style={{width: "100%"}} {...field}   />}
                                />

                            </Grid>

                        </Grid>
                        <Grid item>
                            <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                                <Grid item>
                                    <FormLabel>Name</FormLabel>
                                </Grid>
                                <Grid item style={{width: "60%"}}>
                                    <Controller
                                        name="role"
                                        control={control}
                                        render={({field}) => <Select
                                            {...field}
                                            options={slct}
                                        />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Age</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="age"
                                    control={control}
                                    defaultValue=""
                                    render={({field}) => <Input type={"number"} style={{width: "100%"}} {...field} />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"space-between"} alignItems={"center"}>
                            <Grid item>
                                <FormLabel>Role</FormLabel>
                            </Grid>
                            <Grid item style={{width: "60%"}}>
                                <Controller
                                    name="role"
                                    control={control}
                                    render={({field}) => <Select
                                        {...field}
                                        options={[
                                            {value: "1", label: "Worker"},
                                            {value: "2", label: "Developer"},
                                            {value: "3", label: "Admin"}
                                        ]}
                                    />}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} justify={"center"}>
                            <Grid item>

                                <Button type={"submit"}>Submit</Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}



export default PlayerSelector;