import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';
import './App.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Landing from './components/Landing'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className='App'>
          <header className='header'>
            <section className='header-text'>
              <h3>Bargain Bin Newegg</h3>
              <section className='section'>
                <h5><Link
                  to='/auth'
                  className='options'
                >Sign In / Register</Link></h5>
                <h5><Link
                  to='/user-profile'
                  className='options'
                >Cart</Link></h5>
              </section>
            </section>
          </header>
          <section className='scroll-bar'>
            <h4 className='scroll-bar-content'>GPUs</h4>
            <h4 className='scroll-bar-content'>Processors</h4>
            <h4 className='scroll-bar-content'>Ram</h4>
            <h4 className='scroll-bar-content'>PSUs</h4>
            <h4 className='scroll-bar-content'>Cases</h4>
            <h4 className='scroll-bar-content'>HDDs</h4>
            <h4 className='scroll-bar-content'>SSDs</h4>
            <h4 className='scroll-bar-content'>Motherboards</h4>
            <h4 className='scroll-bar-content'>Keyboards</h4>
            <h4 className='scroll-bar-content'>Mouse</h4>
            <h4 className='scroll-bar-content'>Monitors</h4>
          </section>
          <div className='page-display'>
            {/* {routes} */}
            <Landing />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);