import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Container from 'b:Container m:center';
import FeedItem from 'b:FeedItem';

export default decl({
  block: 'App',
  elem: 'Main',
  tag: 'main',
  content (props) {
    return (
      <Fragment>
        <Container mods={{ center: true }}>
          {props.feedItems.map((data, i) => (
            <FeedItem key={i} {...data} />
          ))}
        </Container>
      </Fragment>
    );
  }
});
