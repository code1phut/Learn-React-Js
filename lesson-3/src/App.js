import React, { Component } from 'react';
import './App.css';
class App extends Component {
    infoProducts(product) {
        if (product.status === true) {
            return <h3>
                <p>{product.id}</p>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.status ? 'Active' : 'Inactive'}</p>
            </h3>
        }
    }

  render() {
    var a = 5;
    var b = '7';
    var product = {
        id : 1,
        name: 'IP7',
        price: '13.000.000VND',
        status: true,
    }

    var users = [
        {id: 1, name: ' Nguyen Van A', age: 18},
        {id: 2, name: ' Nguyen Van B', age: 19},
        {id: 3, name: ' Nguyen Van C', age: 20}
    ];

    var elements = users.map((user, index) => {
        return (
            <div key={index}>
                <h2>Ho va ten: {user.name}</h2>
                <h2>Tuoi: { user.age }</h2>
            </div>
        );
    })
    return (
        <div>
          <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="#">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </nav>
          <div className='ml-30'>
            <h2>{a}</h2>
            <h2>a+b: {a+b}</h2>
              {this.infoProducts(product)}
              <br/>
              <hr/>
              {elements}
          </div>
        </div>
    );
  }
}

export default App;
