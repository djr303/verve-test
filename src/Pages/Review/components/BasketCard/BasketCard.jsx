import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromBasket } from '../../actions';

export class BasketCardComponent extends Component {
    getCardCost (price, quantity) {
        let cost = price;
        cost = price * quantity;
        return cost;
    }

    handleClick = (id) =>
        this.props.dispatch(removeFromBasket(id));

    render () {
        const { item: { id, title, price, quantity } } = this.props;
        return (
            <div onClick={this.handleClick.bind(this, { id })}>
                <h3>{title}</h3>
                <p>Cost: £{this.getCardCost(price, quantity)}</p>
                <p>Quantity: {quantity}</p>
                <button>Remove from Basket</button>
            </div>
        );
    }
}

BasketCardComponent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.decimal,
        quantity: PropTypes.number,
    }).isRequired,
};

export default connect()(BasketCardComponent);
