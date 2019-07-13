import React from 'react';
import Basket from './components/Basket/Basket.jsx';
import TicketList from './components/TicketList/TicketList.jsx';
import Total from './components/Total/Total.jsx';
import './Review.scss';

const Review = ({ Campaign = {} }) => {
    const { Products, title } = Campaign;
    return (
        <div className="flex-layout">
                    <TicketList
                        key="listings"
                        title={title}
                        products={Products || []}
                    />
                    <div className="basket">
                        <Basket />
                        <Total />
                    </div>
        </div>
    );
}

export default Review;
