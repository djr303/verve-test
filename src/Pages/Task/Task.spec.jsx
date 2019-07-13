import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task.jsx';

describe('<Task />', () => {
    let component;
    const props = {
        campaign: {
            title: 'campaign-x-test',
        },
    }

    beforeEach(() => {
        component = shallow(<Task {...props} />);
    });

    it('renders with props', () => {
        expect(component).toMatchSnapshot();
    });
});
