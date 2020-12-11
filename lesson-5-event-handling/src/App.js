import React, { Component } from 'react';
import Product from "./Components/Product";

class App extends Component {

    onClickMe = () => {
        console.log('Day la app conponent');
    }
    render() {

        var products = [
            {
                id: 1,
                name: 'Iphone 12 Promax',
                price: 15000000,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: true,
            },
            {
                id: 2,
                name: 'Iphone 12',
                price: 14000000,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: true,
            },
            {
                id: 3,
                name: 'Iphone 11 pro max',
                price: 13000000,
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: true,
            },
        ];

        var elements = products.map((product, index) => {
            var result = '';
            if (product.status) {
                result = <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >
                    {product.name}
                </Product>
            }

            return  result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">Props</a>
                    </div>
                </nav>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-sm-12 col-md-12 col-lg-12'>
                            { elements }
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className='btn btn-primary'
                                    onClick={ this.onClickMe }
                            >
                                Click Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
