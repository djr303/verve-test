import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: window.__ENV_CONSTS__.gateway }),
});

const Apollo = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
);

Apollo.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Apollo;
