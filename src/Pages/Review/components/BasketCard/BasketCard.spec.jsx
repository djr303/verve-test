import React from 'react';
import { shallow } from 'enzyme';
import { BasketCardComponent } from './BasketCard.jsx';

describe('<BasketCard />', () => {
    let component;
    const props = {
        dispatch: jest.fn(),
        item: {
            id: '2',
        },
    };

    beforeEach(() => {
        component = shallow(<BasketCardComponent {...props} />);
    });

    it('renders', () => {
        expect(component).toMatchSnapshot();
    });
});
