import React, { Component } from 'react';

class Product extends Component {
    render() {

        return (
            <div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="thumbnail">
                        <img alt={this.props.name} src={this.props.image}/>
                            <div className="caption">
                                <h3>{this.props.name}</h3>
                                <p>
                                    {this.props.price}
                                </p>
                                <p>
                                    <a className="btn btn-primary">Mua Hang</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
