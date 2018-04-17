import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Link from 'b:Link';

export default decl({
  block: 'FeedItem',
  elem: 'Header',
  tag: 'header',
  content (props) {
    const { children, title, titleColor, href = '#' } = props;

    return (
      <Fragment>
        <Link href={href} mix={{ block: 'FeedItem', elem: 'TitleContainer' }}>
          <Bem block="FeedItem" elem="Title" style={{ color: titleColor }}>{title}</Bem>
        </Link>
        {children}
      </Fragment>
    );
  }
});
