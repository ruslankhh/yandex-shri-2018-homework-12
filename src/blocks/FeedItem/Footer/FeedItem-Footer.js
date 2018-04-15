import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Footer',
  tag: 'footer',
  content () {
    return (
      <Fragment>
        <Bem elem="DescriptionContainer">
        </Bem>
      </Fragment>
    );
  }
});
