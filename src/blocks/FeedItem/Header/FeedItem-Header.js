import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Header',
  tag: 'header',
  content () {
    return (
      <Fragment>
        <Bem elem="TitleContainer">
        </Bem>
      </Fragment>
    );
  }
});
