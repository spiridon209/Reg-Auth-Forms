import React from 'react';
import { connect } from 'react-redux';
import { WarningTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './ServerErrors.scss';

const ServerErrors = (props) => {
  const { serverErrors } = props;

  if (!serverErrors) {
    return null;
  }

  const errorsList = (
    <ul className="ServerErrors">
      {Object.keys(serverErrors).map((error, index) => (
        <li key={_.uniqueId(index)} className="ServerErrors-Item">
          <WarningTwoTone twoToneColor="#cf1322" />
          <span className="ServerErrors-ItemText">{`${error}: ${serverErrors[error]}`}</span>
        </li>
      ))}
    </ul>
  );

  return <div className="ServerErrorsWrap">{errorsList}</div>;
};

const mapStateToProps = (state) => {
  return {
    serverErrors: state.auth.errors,
  };
};

ServerErrors.propTypes = {
  serverErrors: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default connect(mapStateToProps)(ServerErrors);
