import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products : [
                {
                    id: 1,
                    name: 'Iphone 12 Pro max',
                    price: 15000000,
                    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000',
                    status: true
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
                    status: true
                }
            ],
            isActive: true
        }
    }

    onSetState = () => {
        console.log(true)
            this.setState({
                isActive: !this.state.isActive
            })
    }
    render() {

        var elements = this.state.products.map((product, index) => {
            var result = '';
            if (product.status) {
                result = <tr key={product.id}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>
                        <label className='label label-success'>{product.price}VND</label>
                    </td>
                </tr>
            }

            return  result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand">State</a>
                    </div>
                </nav>

                <div className='container'>
                    <div className='row'>
                        <div className='row'>
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá</th>
                                </tr>
                                </thead>
                                <tbody>
                                {elements}
                                </tbody>
                            </table>
                            <button type="button" className='btn btn-primary' onClick={ this.onSetState }>
                                Active{ this.state.isActive === true ? 'true' : 'false'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
