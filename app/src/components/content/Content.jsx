import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {selectValue} from "../../redux/tabvalue/tabvalueSlice"
import {useSelector} from "react-redux";
import {Paper} from "@material-ui/core";
import UserTable from "./User/Table/UserTable";
import UserForm from "./User/UserForm";
import {Grid,Box} from "@material-ui/core";
import GamesInput from "./Game/GamesInput";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));


export default function Content() {
    const selectedTab = useSelector(selectValue)

    const classes = useStyles();


    switch (selectedTab) {
        case 0:
            return (
                <Grid container spacing={8}>
                    <Grid item>
                        <UserForm/>
                    </Grid>
                    <Grid item>
                        <UserTable/>
                    </Grid>
                </Grid>
            )
        case 1:
            return (
                <Grid container spacing={8}>
                    <Grid item>
                        <GamesInput/>
                    </Grid>
                </Grid>
            )
    }

}