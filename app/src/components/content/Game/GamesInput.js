import React, {useEffect} from 'react';
import {Grid} from "@material-ui/core";
import PlayerSelector from "./PlayerSelector";

export function GamesInput() {

    return (
        <Grid container>
            <Grid item>
                <PlayerSelector/>
            </Grid>
        </Grid>
    );

}

export default GamesInput;