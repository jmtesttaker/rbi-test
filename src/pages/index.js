import React from "react"
import { Grid } from '@material-ui/core'
import BrandPortal from '../components/BrandPortal'

export default class HomePage extends React.Component {
    render() {
        return (
            <Grid container direction='row' spacing={5}>
                <Grid item xs={12} sm={4} md={4}>
                    <BrandPortal config={config.popeyes} />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <BrandPortal config={config.timHortons} />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <BrandPortal config={config.burgerKing} />
                </Grid>
            </Grid>
        )
    }
}


const config = {
    popeyes: {
        name: 'Popeyes'
    },
    timHortons: {
        name: 'Tim Hortons'
    },
    burgerKing: {
        name: 'Burger King'
    }
}