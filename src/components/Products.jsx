import React, { Component } from 'react';
import Product from './Product';
import PRODUCTS from '../data/PRODUCTS';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Container className="my-4 p-3"><Row>
            {PRODUCTS.map(product => <Product key={product.id} product={product} />)}
        </Row></Container>);
    }
}

export default Products;