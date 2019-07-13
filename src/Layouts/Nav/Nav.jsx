import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';

const Nav = ({ children }) => [(
    <ul key="nav" className="nav-bar">
        <li><a href="/review">Part 1: Review</a></li>
        <li><a href="/task">Part 2: Task</a></li>
    </ul>
), children];

Nav.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Nav;
