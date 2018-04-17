import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Footer from 'e:Footer';
import Button from 'e:Button m:type=actions m:type=heart';

export default declMod({ type: 'text' }, {
  block: 'FeedItem',
  mods ({ type, size }) {
    return { ...this.__base(...arguments), type, size };
  },
  content (props) {
    return (
      <Fragment>
        <Bem elem="Container">
          <Header {...props} />
          <Footer {...props}>
            <Bem elem="ButtonGroup" mods={{ place: 'footer' }}>
              <Button type="actions" />
              <Button type="heart" />
            </Bem>
          </Footer>
        </Bem>
      </Fragment>
    );
  }
});
