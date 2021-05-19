import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getValue } from '../utilities/main';
import Product from './Product';

const mapStateToProps = (state) => {
    let cartDetails = getValue(state, 'cartDetails', [])
    let products = cartDetails.map(product => getValue(product, 'productDetails'));
    return {
        products
    }
};

class Cart extends Component {

    renderItems() {
        let cart;
        if (this.props.products.length) {
            cart = this.props.products.map((product => <Product key={product.id} product={product} fromCartPage />))
        } else cart = <h5 className="my-5">No items in your cart</h5>
        return cart;
    }

    render() {
        return (<Container>
            <Row>{this.renderItems()}</Row>
        </Container>);
    }
}

export default connect(mapStateToProps)(Cart);