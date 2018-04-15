import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Body',
  content () {
    return (
      <Fragment>
        <Bem elem="ImageContainer">
        </Bem>
      </Fragment>
    );
  }
});
