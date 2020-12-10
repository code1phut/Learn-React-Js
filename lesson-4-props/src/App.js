import React, { Component } from 'react';
import Product from "./Components/Product";

class App extends Component {
    render() {

        var products = [
            {
                id: 1,
                name: 'Iphone 12 Pro Max',
                price: '33.000.000 VND',
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: false
            },
            {
                id: 2,
                name: 'Iphone 11 Pro Max',
                price: '22.000.000 VND',
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: false
            },
            {
                id: 3,
                name: 'Iphone 11',
                price: '12.000.000 VND',
                image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                status: true
            }
        ];

        var elements = products.map((product, index) => {
            return
                <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >
                    {product.name}
                </Product>
        })

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
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
