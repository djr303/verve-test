import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {compose} from 'react-apollo';
import Query from './components/Query/Query.jsx';
import Review from './Review.jsx';
import state from './reducers';
import Nav from '../../Layouts/Nav';

const store = createStore(state);

const WrpCmp = compose(Query)(Review);

const ReviewIndex = props => (
  <Provider store={store}>
    <Nav>
      <WrpCmp {...props} />
    </Nav>
  </Provider>
);

export default ReviewIndex;
