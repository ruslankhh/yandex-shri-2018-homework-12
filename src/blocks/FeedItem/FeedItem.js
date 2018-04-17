import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Body from 'e:Body';
import Footer from 'e:Footer';

import 'e:Container';

export default decl({
  block: 'FeedItem',
  mods ({ size, image, description }) {
    return {
      size,
      type: `t${image ? 'i' : ''}${description ? 'd' : ''}`
    };
  },
  content (props) {
    return (
      <Fragment>
        <Bem elem="Container">
          <Header {...props} />
          <Body {...props} />
          <Footer {...props} />
        </Bem>
      </Fragment>
    );
  }
});
