import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Container from 'b:Container m:center';
import FeedItem from 'b:FeedItem';

import 'b:FeedItem m:size=l m:size=m m:size=s m:type=td m:type=ti m:type=tid';

export default decl({
  block: 'App',
  elem: 'Main',
  tag: 'main',
  content ({ feedItems }) {
    return (
      <Fragment>
        <Container mods={{ center: true, grid: true }}>
          {feedItems.map((data, i) => (
            <FeedItem key={i} {...data} />
          ))}
        </Container>
      </Fragment>
    );
  }
});
