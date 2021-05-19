import React, { Component } from 'react';
import Products from './Products';
import { changeView } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { isGridView: state.isGridView }
}

const mapDispatchToProps = { changeView };

class Home extends Component {
    render() {
        return (<div><Products /></div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);