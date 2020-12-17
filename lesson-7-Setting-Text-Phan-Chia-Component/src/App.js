import React, { Component } from 'react';
import './App.css';
import Reset from "./Components/Reset";
import Result from "./Components/Result";
import SizeSetting from "./Components/SizeSetting";
import ColorPicker from "./Components/ColorPicker";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'red',
            fontSize: 8,
        }
    }

    onSetColor = (params) => {
        this.setState({
            color: params,
        })
    }

    onReset = (value) => {
        console.log(value)
        if (value) {
            this.setState( {
                color: 'red',
                fontSize: 8,
            })
        }
    }

    onChaneSize = (value) => {
        //8 -> 36
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize,
            })
        } else {

        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor}/>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting fontSize={ this.state.fontSize }  onChangeSize={ this.onChaneSize }/>
                            <Reset onReset={this.onReset}/>
                        </div>
                        <Result  color={ this.state.color } fontSize={ this.state.fontSize } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
