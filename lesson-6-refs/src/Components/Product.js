import React, { Component } from 'react';

class Product extends Component {
    // constructor(props) {
    //     super(props);
    //     this.addToCart = this.addToCart.bind(this);
    //     // console.log(props, 333)
    // }
    // addToCart() {
    //     alert(this.props.children + '-= 8==D =-' + this.props.price);
    // }

    addToCart = () => {
        alert(this.props.children + '-= 8==D =-' + this.props.price);

    }

    render() {
        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="thumbnail">
                        <img alt={this.props.children} src={this.props.image} />
                            <div className="caption">
                                <h3>{ this.props.children }</h3>
                                <p>
                                    { this.props.price } VND
                                </p>
                                <p>
                                    <a className="btn btn-primary" onClick={ this.addToCart }>Mua Hang</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
