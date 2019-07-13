import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes.jsx';

describe('<Routes />', () => {
    let routes;

    beforeEach(() => {
        routes = shallow(<Routes />);
    });

    it('renders', () => {
        expect(routes).toMatchSnapshot();
    });
});
