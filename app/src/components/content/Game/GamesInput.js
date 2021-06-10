import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import PlayerSelector from "./PlayerSelector";

export function GamesInput() {

        return (
            <Grid container spacing={8}>
                <Grid item>
                   <PlayerSelector/>
                </Grid>
                <Grid item>
                    <PlayerSelector/>
                </Grid>
            </Grid>
        );

}

export default GamesInput;