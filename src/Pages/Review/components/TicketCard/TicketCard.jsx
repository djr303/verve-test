import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToBasket } from '../../actions';
import './ticketcard.scss';

export class TicketCardComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    handleClick = (item) => {
        this.props.dispatch(addToBasket(item));
        this.setState({
            active: true,
        });
    }

    render () {
        const { product: { id, title, price } } = this.props;
        const activeClass = this.state.active ? 'card active' : 'card';
        return (
            <div
                className={activeClass}
                onClick={() => this.handleClick({id, title, price})}
            >
                <h3>{title}</h3>
                <p>£{price}</p>
                <button>Add to Basket</button>
            </div>
        );
    }
}

TicketCardComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.decimal,
        quantity: PropTypes.number,
    }).isRequired,
};

export default connect()(TicketCardComponent);
