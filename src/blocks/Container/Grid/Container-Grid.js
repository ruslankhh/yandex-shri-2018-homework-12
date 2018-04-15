import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Container',
  elem: 'Grid',
  content ({ children }) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
});
