
function Product() {
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img alt="Iphone" src='https://static.toiimg.com/thumb/msid-79167081,width-640,resizemode-4/79167081.jpg'/>
                        <div className="caption">
                            <h3>Iphone 12</h3>
                            <p>
                                33.000.000 VND
                            </p>
                        </div>
                    <button type="button" className="btn btn-default">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
