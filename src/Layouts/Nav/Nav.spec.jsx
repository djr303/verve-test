import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.jsx';

describe('<Nav />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Nav><p>a child</p></Nav>);
    });

    it('renders with children', () => {
        expect(component).toMatchSnapshot();
    });
});
