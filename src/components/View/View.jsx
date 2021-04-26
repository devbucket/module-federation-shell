import React, { memo } from 'react';
import PropTypes from 'prop-types'

export const View = memo(
  function View({ children }) {
    return (
      <div className="pt-4 pb-4">
        {children}
      </div>
    );
  }
);

View.propTypes = {
  children: PropTypes.node.isRequired
}
