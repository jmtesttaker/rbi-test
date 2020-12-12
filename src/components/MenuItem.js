import React from "react"
import {Box, Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

class MenuItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imageUrl = (this.props.image !== undefined) ? '/images/' + this.props.image.asset._ref : '/images/notfound.png'
        return (
            <Card>
                <CardMedia style={mediaStyle} image={imageUrl} title={ this.props.name.en } />
                <CardContent>
                    <h4>{ this.props.name.en }</h4>
                </CardContent>
            </Card>
        )
    }
}


const mediaStyle = {
    height: '200px'
}
export default MenuItem