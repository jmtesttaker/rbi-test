import React from "react"
import {Box, Button, ListItem,Grid} from '@material-ui/core'

class SectionItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imageUrl = (this.props.image !== undefined) ? '/images/' + this.props.image.asset._ref : '/images/notfound.png'
        return (
            <ListItem>
                <Grid container direction='row' style={sectionStyle}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button onClick={() => {this.props.onSelection(this.props)}}>{this.props.name.en}</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <img src={imageUrl} style={imgStyle} />
                    </Grid>
                </Grid>
            </ListItem>
        )
    }
}

export default SectionItem

const imgStyle = {
    width: '100px',
    height: '100px',
    padding: '0px 0px 5px',
}
const sectionStyle = {
    textAlign: 'center'
}