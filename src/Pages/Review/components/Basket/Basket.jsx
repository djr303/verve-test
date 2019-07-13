  import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import BasketCard from '../BasketCard/BasketCard.jsx';
import './Basket.scss';

const mapStateToProps = (state) => Object({
    basket: state.basket,
});

export const BasketComponent = (props) => {
    const basket = omit(props, ['basket']);
    return (
        <div>
            <h1>Your Basket</h1>
            <p>You're currently looking at purchasing these tickets:</p>
            <div>
                { props.basket.map((item, index) => {
                    if (item && item.quantity) {
                        return (
                            <BasketCard
                                item={item}
                                key={`basket-item-${index}`}
                            />
                        );
                    }
                    return '';
                }) }
            </div>
        </div>
    );
};

BasketComponent.propTypes = {
    basket: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps,
)(BasketComponent);
