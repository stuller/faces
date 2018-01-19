import React, { Component } from 'react';
import './App.css';
import ChromePicker from 'react-color';

import Head from './Components/Head/Head';
import Eyes from './Components/Eyes/Eyes';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skin: '#f2d3c4',
            eyes: '#6ebc60',
            displayColorPicker: false,
            activeColorPicker: ''
        }
        this.handleUpdateSkin = this.handleUpdateSkin.bind(this);
        this.handleUpdateEyes = this.handleUpdateEyes.bind(this);
        this.handleShowColorPicker = this.handleShowColorPicker.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
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

    handleShowColorPicker(trigger) {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker,
            activeColorPicker: trigger
        })
    };

    handleClose = () => {
        this.setState({
            displayColorPicker: false,
            activeColorPicker: ''
        })
    };

    handleChangeColor = (color) => {
        this.setState({ [this.state.activeColorPicker]: color.hex })
    };
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div className="App">
                <Head color={this.state.skin} size="200px">
                    <Eyes color={this.state.eyes}/>
                </Head>
                <div style={{'left':'300px', 'position':'absolute'}}>
                    <label htmlFor="head">Skin color: </label>
                    <div
                        name="skin"
                        style={{'width':'40px', 'height':'30px', 'backgroundColor':this.state.skin}}
                        onClick={() => this.handleShowColorPicker('skin')}
                    > </div>
                    <br/>
                    <label htmlFor="eyes">Eye color: </label>
                    <div
                        name="eyes"
                        style={{'width':'40px', 'height':'30px', 'backgroundColor':this.state.eyes}}
                        onClick={() => this.handleShowColorPicker('eyes')}
                    > </div>
                </div>
                <div style={{'left':'350px', 'position':'absolute'}}>
                    { this.state.displayColorPicker ? <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose }/>
                        <ChromePicker disableAlpha color={ this.state[this.state.activeColorPicker] } onChange={ this.handleChangeColor } />
                    </div> : null }
                </div>

            </div>

        );
    }
}

export default App;
