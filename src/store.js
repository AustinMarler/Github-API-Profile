import { createStore } from 'redux'

import profileReducer from './reducers/profileReducer'

const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store