import React, { Component } from 'react';
import { Card, Col, Button, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addItem, changeTotalItemCount, removeItem } from '../actions';
import '../style/main.css';
import { getValue } from '../utilities/main';

const mapStateToProps = (state, props) => {
    let cartDetails = getValue(state, 'cartDetails', []);
    let productFromState = cartDetails.find(item => getValue(item, 'productDetails.id') === getValue(props, 'product.id'));
    let numItemAddedToCart = getValue(productFromState, 'count', 0);
    return {
        numItemAddedToCart
    };
}

const mapDispatchToProps = { addItem, changeTotalItemCount, removeItem };

class Product extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        this.props.addItem(this.props.product);
        this.props.changeTotalItemCount(1);
    }

    renderAddBtn() {
        let addBtn;
        if (this.props.fromCartPage) {
            addBtn = null;
        }
        else if (getValue(this.props.product, 'inventoryCount', 0) === 0) {
            addBtn = "Product out of stock"
        }
        else if ((this.props.numItemAddedToCart >= getValue(this.props.product, 'maxPurchaseLimit')) || (this.props.numItemAddedToCart >= getValue(this.props.product, 'inventoryCount', 0))) {
            addBtn = "Limit reached"
        }
        else addBtn = <Button onClick={this.addItem}>Add to Cart</Button>;
        return addBtn;
    }

    removeItem() {
        this.props.removeItem(getValue(this.props, 'product.id'));
        this.props.changeTotalItemCount(-1);
    }

    showItems() {
        let itemBadge;
        if (this.props.numItemAddedToCart > 0) {
            itemBadge = <Badge pill variant="info">{this.props.numItemAddedToCart}</Badge>
        }
        return itemBadge;
    }

    renderRemoveButton() {
        let removeBtn;
        if (this.props.numItemAddedToCart > 0) {
            removeBtn = <Button variant="danger" onClick={this.removeItem}>-</Button>;
        }
        return removeBtn;
    }

    getMaxPurchaseLimit() {
        return <p><b>Max purchase limit: {getValue(this.props.product, 'maxPurchaseLimit')}</b></p>;
    }

    getAvailability() {
        return <p><b>availability: {getValue(this.props.product, 'inventoryCount')}</b></p>;
    }

    render() {
        return (<Col lg={3} md={4} sm={6} xs={12} className="my-3">
            <Card>
                <Card.Body>
                    <div style={{ height: "60px" }}>
                        <Card.Title>{this.props.product.name}<Badge pill variant="primary"></Badge></Card.Title>
                    </div>
                    <Card.Subtitle className="my-1 text-muted">{getValue(this.props, 'product.category')}</Card.Subtitle>
                    <Card.Subtitle className="my-1 text-muted">₹ {getValue(this.props, 'product.price')} {this.showItems()}</Card.Subtitle>
                    <hr />
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <p><b>{this.props.product.isFreeDeliveryAvailable ? 'F' : 'No f'}ree delivery</b></p>
                        {this.getAvailability()}
                        {this.getMaxPurchaseLimit()}
                    </Card.Text>
                    {this.renderAddBtn()} {this.renderRemoveButton()}
                </Card.Body>
            </Card></Col>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);