import React from "react"
import {Box, Button,List,Grid} from '@material-ui/core'
import MenuItem from './MenuItem'
import SectionItem from './SectionItem'

var selectedSection = null

export default class BrandMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.state,
            selectedSection: null
        }
    }
    handleSelectedSection = (section) => {
        this.setState({ selectedSection: section })
    }
    filteredItems() {
        if (this.state.selectedSection === null) {
            return this.props.state.items
        } else {
            var showList = []
            const options = this.state.selectedSection.options.map( item => { return item._ref})
            for (let i in this.props.state.items) {
                const item = this.props.state.items[i]
                if (options.includes(item._id)) {
                    showList.push(item)
                }
            }
            return showList
        }
    }
    render() {
        var config = this.props.state
        if (config !== undefined) {
            const sectionItems = config.sections.map( ( item, index ) =>
                <SectionItem {...item} key={"section"+index} onSelection={this.handleSelectedSection} />
            )
            const listItems = this.filteredItems().map( (item,index) =>
                <Grid item xs={4} sm={4} md={4} style={gridCenter}>
                    <MenuItem {...item} key={"menu"+index} />
                </Grid>
            )
            return (
                <Box key={config.menu.length} style={brandPortalStyle}>
                    <h3 >{ config.menu.name.en }</h3>

                    <h4>Sections</h4>
                    <List style={sectionAreaStyle}>
                        {sectionItems}
                    </List>

                    <h4>Menu Items</h4>
                    <Grid container direction='row' spacing={3}>
                        {listItems}
                    </Grid>
                </Box>
            )
        } else {
            return (
                <Box style={brandPortalStyle}>
                    <h3>Has not been implemented</h3>
                </Box>
            )
        }
    }
}

const brandPortalStyle = {
    textAlign: 'left',
    border: 'black 2px solid',
    padding: '5px 5px 10px',
    height: '680px',
    maxHeight: '680px',
    overflowY: 'scroll',
    overflowX: 'hidden'
}
const sectionAreaStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    width: '100%',
    overflowX: 'scroll'
}


const gridCenter = {
    textAlign: 'center'
}