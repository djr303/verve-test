import React from 'react';
import { shallow } from 'enzyme';
import Review from './Review.jsx';

describe('<Review />', () => {
    let component;
    const props = {
        Campaign: {
            title: 'test campaign',
            Products: [
                {
                    id: '001',
                    title: 'xxx',
                    price: 40
                }
            ]
        },
    }

    beforeEach(() => {
        component = shallow(<Review {...props} />);
    });

    it('renders with props', () => {
        expect(component).toMatchSnapshot();
    });
    //review:
});
