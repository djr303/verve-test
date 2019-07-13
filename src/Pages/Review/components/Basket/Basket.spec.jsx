import React from 'react';
import { shallow } from 'enzyme';
import { BasketComponent } from './Basket.jsx';

describe('<Basket />', () => {
    let component;
    const props = {
        basket: [
            {
                id: '2',
                quantity: 1,
            }
        ],
    };

    beforeEach(() => {
        component = shallow(<BasketComponent {...props} />);
    });

    it('renders', () => {
        expect(component).toMatchSnapshot();
    });
});
