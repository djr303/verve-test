import React from 'react';
import { shallow } from 'enzyme';
import { TotalComponent } from './Total.jsx';

describe('<Total />', () => {
    let component;
    const props = {
        basket: [
            {
                price: 10.00,
                quantity: 2,
            },
            {
                price: 12.40,
                quantity: 1,
            }
        ],
    }

    beforeEach(() => {
        component = shallow(<TotalComponent {...props} />);
    });

    it('renders with correct total', () => {
        expect(component).toMatchSnapshot();
    });
});
