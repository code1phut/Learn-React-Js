import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      txtUserName: '',
      txtPassword: '',
      txtDescription: '',
      sltGender: 1,
      rdLang: 'vi',
      status: true
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;


    this.setState( {
      [name] : value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)

  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={ this.onHandleSubmit }>
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        className="form-control"
                        name='txtUserName'
                        value={ this.state.txtUserName }
                        onChange={this.onHandleChange }
                    />
                    <label>Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        name='txtPassword'
                        value={ this.state.txtPassword }
                        onChange={this.onHandleChange }
                    />
                    <label>Description: </label>
                    <textarea
                        className="form-control"
                        name='txtDescription'
                        value={ this.state.txtDescription }
                        rows='3'
                        onChange={ this.onHandleChange }
                    />

                    <label>Gender: </label>
                    <select
                        className="form-control"
                        name="sltGender"
                        value={this.state.sltGender}
                        onChange={ this.onHandleChange }
                    >
                    <option value={0}>Female</option>
                      <option value={1}>Male</option>
                    </select>

                    <br/>
                    <label>Language: </label>
                    <div className="radio">
                      <label>
                        <input
                            type="radio"
                            name="rdLang"
                            value='en'
                            onChange={ this.onHandleChange }
                            checked={ this.state.rdLang === 'en'}
                        />
                          English
                      </label>
                      <br/>
                      <label>
                        <input
                            type="radio"
                            name="rdLang"
                            value='vi'
                            onChange={ this.onHandleChange }
                            checked={ this.state.rdLang === 'vi'}
                        />
                        Vietnamese
                      </label>
                    </div>
                    <br/>
                    <div className="checkbox">
                      <label>
                        <input
                            type="checkbox"
                            name='status'
                            value={ true }
                            onChange={ this.onHandleChange }
                            checked={ this.state.status }
                        />
                          Status
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="reset" className="btn btn-default">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
