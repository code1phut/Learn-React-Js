import React, { Component } from 'react';

class Reset extends Component {

    onReset = () => {
        this.props.onReset(true);
    }
    render() {
        return (
            <div>
                <button type='button' className='btn btn-primary' onClick={ this.onReset }>reset</button>
            </div>
        );
    }
}

export default Reset;
