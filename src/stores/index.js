import {createStore} from 'redux'
import axios from 'axios'


const initialState = {
    menu: [],
    sections: [],
    items: []
}

const menuInitialState = null


const apiReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch(action.type) {
        case 'api/refreshAll':
            axios.get('http://localhost:3001/api/menu').then(response => { newState.menu = response.data })
            axios.get('http://localhost:3001/api/sections').then(response => { newState.sections = response.data })
            axios.get('http://localhost:3001/api/items').then(response => { newState.items = response.data })
            break
        case 'api/menu':
            axios.get('http://localhost:3001/api/menu').then(response => { newState.menu = response.data })
            break
        case 'api/sections':
            axios.get('http://localhost:3001/api/sections').then(response => { newState.sections = response.data })
            break
        case 'api/items':
            axios.get('http://localhost:3001/api/items').then(response => { newState.items = response.data })
            break
        default:
            if (!action.type.includes('@@redux')) console.log('Incorrect dispatch declared!')
            break
    }

    return newState
}

const menuApiReducer = (state = menuInitialState, action) => {
    const newState = { ...state }
    switch(action.type) {
        case 'api/menu':
            axios.get('http://localhost:3001/api/menu').then(response => { newState.menu = response.data })
            break
        default:
            if (!action.type.includes('@@redux')) console.log('Incorrect dispatch declared!')
            break
    }

    return newState
}


const Store = createStore(apiReducer);
export default Store