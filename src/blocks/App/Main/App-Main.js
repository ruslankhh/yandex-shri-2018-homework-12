import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Container from 'b:Container m:grid m:align=center';
import FeedItem from 'b:FeedItem m:size=s|m|l m:type=full|image|text';

export default decl({
  block: 'App',
  elem: 'Main',
  tag: 'main',
  content ({ feedItems }) {
    return (
      <Fragment>
        <Container grid align="center">
          {feedItems.map((data, i) => {
            const { image, description } = data;
            const type = image && description ? 'full' : image ? 'image' : 'text';

            return <FeedItem key={i} type={type} {...data} />;
          })}
        </Container>
      </Fragment>
    );
  }
});
