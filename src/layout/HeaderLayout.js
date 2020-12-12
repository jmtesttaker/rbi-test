import React from "react"
import {AppBar,Grid, Toolbar, Box,Container} from '@material-ui/core'

export default class HeaderLayout extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Box>
                <AppBar position='fixed' style={appBarStyle}>
                    <Toolbar variant="dense" >
                        <Container>
                            <Grid container direction='row' spacing={5}>
                                <Grid item  xs={12} sm={4} md={4} style={gridCenter}>
                                    <h2>Popeyes</h2>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} style={gridCenter}>
                                    <h2>Tim Hortons</h2>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} style={gridCenter}>
                                    <h2>Burger King</h2>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Box>
        )
    }
}

const appBarStyle = {
    background: '#303030',
    fontColor: '#000000',
    fontWeight: 'bold'
}

const gridCenter = {
    textAlign: 'center'
}