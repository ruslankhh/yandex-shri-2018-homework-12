import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Header',
  tag: 'header',
  content (props) {
    const { children, title, titleColor, href = '#' } = props;

    return (
      <Fragment>
        <Bem elem="TitleContainer">
          <Bem elem="Title" tag="a" href={href} style={{ color: titleColor }}>{title}</Bem>
        </Bem>
        {children}
      </Fragment>
    );
  }
});
