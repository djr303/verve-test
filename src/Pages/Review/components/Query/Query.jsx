import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const campaign_id = '001';
export default graphql(
    gql`
        query Campaign($id: ID!) {
            Campaign(id: $id) {
                title
                Products {
                    id
                    title
                    price
                }
            }
        }
    `,
    {
        options: () => ({ variables: { id: campaign_id } }),
        props: ({ data = {} }) => {
            return data;
        },
    },
);
