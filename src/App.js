import React, { Component } from 'react';
import './App.css';

import Head from './Components/Head/Head';
import Eyes from './Components/Eyes/Eyes';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skin: '#f2d3c4',
            eyes: '#6ebc60'
        }
        this.handleUpdateSkin = this.handleUpdateSkin.bind(this);
        this.handleUpdateEyes = this.handleUpdateEyes.bind(this);
    }

    handleUpdateSkin(e) {
        this.setState({
                skin: e.target.value
        })
    }

    handleUpdateEyes(e) {
        this.setState({
            eyes: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Head color={this.state.skin} size="200px">
                    <Eyes color={this.state.eyes}/>
                </Head>
                <div style={{'left':'300px', 'position':'absolute'}}>
                    <label htmlFor="head">Skin color: </label>
                    <input id="head" type="text" value={this.state.skin} onChange={this.handleUpdateSkin}/>
                    <br/>
                    <label htmlFor="eyes">Eye color: </label>
                    <input id="eyes" type="text" value={this.state.eyes} onChange={this.handleUpdateEyes}/>
                </div>

            </div>

        );
    }
}

export default App;
