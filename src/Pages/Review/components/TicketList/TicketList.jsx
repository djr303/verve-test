import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TicketCard from '../TicketCard/TicketCard.jsx';
import './TicketList.scss';

class TicketList extends Component {
    render () {
        const { products, title } = this.props;
        return (
            <div className="ticket-list">
                <h1 key="title">
                    Tickets for {title}
                </h1>
                <div key="list">
                    { products.map((product, index) => (
                        <div key={`listing-${index}`}>
                            <TicketCard
                                product={product}
                            />
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

TicketList.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.decimal,
            quantity: PropTypes.number,
        }),
    ).isRequired,
};

export default TicketList;
