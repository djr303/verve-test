import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes.jsx';
import ApolloProvider from './Apollo/Apollo.jsx';
import './index.scss';

ReactDOM.render(
    <ApolloProvider>
        <Routes />
    </ApolloProvider>,
    document.getElementById('root'),
);
