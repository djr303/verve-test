import React from 'react';
import { shallow } from 'enzyme';
import { TicketCardComponent } from './TicketCard.jsx';

describe('<TicketCard />', () => {
    let component;
    let instance;
    const props = {
        dispatch: jest.fn(),
        product: {
            id: '1',
            title: 'prod 1',
            price: 10.00,
            quantity: 2,
        },
    };

    beforeEach(() => {
        component = shallow(<TicketCardComponent {...props} />);
        instance = component.instance();
    });

    it('renders', () => {
        expect(component).toMatchSnapshot();
    });

    it('calls dispatch with product info', () => {
        component.find('.card').simulate('click');
        expect(props.dispatch).toHaveBeenCalledWith({
            "id": "1",
            "price": 10,
            "title": "prod 1",
            "type": "ADD_TO_BASKET",
        });
    });

    it('updates local state', () => {
        component.find('.card').simulate('click');
        expect(instance.state).toEqual({ active: true});
    });
});
