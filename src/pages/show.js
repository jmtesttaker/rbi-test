import React from "react"
import { connect, Provider } from "react-redux"
import {Grid} from '@material-ui/core'
import BrandMenu from '../components/BrandMenu'
import Store from '../stores'

class ShowPage extends React.Component {
    constructor(props) {
        super(props)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('update?')
        return nextProps.state.menu.length !== nextState.state.menu.length
    }
    render() {
        // setTimeout(() => this.forceUpdate(), 2000)
        return (
            <Grid container direction='row' spacing={5} spacing={5}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <BrandMenu />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <BrandMenu />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <BrandMenu {...this.props} />
                </Grid>
            </Grid>
        )
    }
}
export default ShowPage