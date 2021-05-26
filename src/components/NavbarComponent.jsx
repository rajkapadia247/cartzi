import React, { Component } from 'react';
import { Badge, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getValue } from '../utilities/main';

const mapStateToProps = state => {
    let cartDetails = getValue(state, 'cartDetails', []);
    let cartValue = cartDetails.reduce((sum, item) => {
        let price = getValue(item, 'productDetails.price');
        let count = getValue(item, 'count')
        return sum + price * count
    }, 0);
    return {
        cartItemsNum: getValue(state, 'totalItemsNum', 0),
        name: getValue(state, 'userDetails.name', ''),
        cartValue
    }
}

class NavbarComponent extends Component {
    state = {}
    render() {
        return (<Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                <img
                    src="logo.png"
                    width="30px"
                    height="30px"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                /> Cartzi</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/">About us</Nav.Link>
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto" >
                    <Nav.Link as={Link} to="/cart">Cart <Badge pill variant="primary">{this.props.cartItemsNum}</Badge>&nbsp;&nbsp;₹ {this.props.cartValue}</Nav.Link>
                </Nav>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Navbar.Text>
                    Hello, <a href="https://www.linkedin.com/in/raj--kapadia/">{this.props.name}</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default connect(mapStateToProps)(NavbarComponent);