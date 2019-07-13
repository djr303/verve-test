import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasketCard from '../BasketCard/BasketCard.jsx';

const mapStateToProps = (state) => Object({
    basket: state.basket,
});

const calculateTotal = (basket) =>
    basket.length && basket.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

export const TotalComponent = ({ basket }) => (
    <div>
        <h2>Total</h2>
        { `£${calculateTotal(basket)}` }
    </div>
);

TotalComponent.propTypes = {
    basket: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.decimal,
            quantity: PropTypes.number,
        }),
    ).isRequired,
};

export default connect(
    mapStateToProps,
)(TotalComponent);
