import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  const { children } = props;
  return <main>{children}</main>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
