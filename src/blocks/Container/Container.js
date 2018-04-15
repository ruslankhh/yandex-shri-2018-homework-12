import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Container',
  content (props) {
    return (
      <Fragment>
        {props.children}
      </Fragment>
    );
  }
});
