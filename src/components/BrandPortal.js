import React from "react"
import {Box, Button} from '@material-ui/core'
import { Link } from "react-router-dom"
import history from '../router/history'


export default function BrandPortal(config = {name: 'Not Implemented'}) {
    config = config.config
    return (
        <Box style={brandPortalStyle}>
            <h3>{ config.name }</h3>

            <Button onClick={redirectToShow}>Let's Eat</Button>

            <Link to='show'>Let's Eat</Link>
        </Box>
    )
}

function redirectToShow() {
    history.push('/show')
}

const brandPortalStyle = {
    textAlign: 'center',
    border: 'black 2px solid',
    padding: '10px 0px',
    height: '680px'
}
