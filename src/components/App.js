import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { getData } from '../actions/actions'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    getData()
  }

  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Header />
          <Body />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App;
