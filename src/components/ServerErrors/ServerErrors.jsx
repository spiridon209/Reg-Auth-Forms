import React from 'react';
import { connect } from 'react-redux';
import { WarningTwoTone } from '@ant-design/icons';

const ServerErrors = (props) => {
  const { serverErrors } = props;

  if (!serverErrors) {
    return null;
  }

  const errorsList = (
    <ul className="ServerErrors">
      {Object.keys(serverErrors).map((error, index) => (
        <li key={index} className="ServerErrors-Item">
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

export default connect(mapStateToProps)(ServerErrors);
