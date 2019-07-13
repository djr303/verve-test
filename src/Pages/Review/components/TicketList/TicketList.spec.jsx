import React from 'react';
import { shallow } from 'enzyme';
import TicketList from './TicketList.jsx';

describe('<TicketList />', () => {
    let component;
    const props = {
        title: 'test title',
        products: [
            {
                id: '1',
                title: 'prod 1',
                price: 10.00,
                quantity: 2,
            },
            {
                id: '2',
                title: 'prod 2',
                price: 12.40,
                quantity: 1,
            }
        ],
    }

    beforeEach(() => {
        component = shallow(<TicketList {...props} />);
    });

    it('renders', () => {
        expect(component).toMatchSnapshot();
    });
});
