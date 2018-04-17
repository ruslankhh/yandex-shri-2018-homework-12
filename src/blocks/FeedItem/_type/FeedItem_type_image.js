import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Body from 'e:Body';
import Button from 'e:Button m:type=heart';

export default declMod({ type: 'image' }, {
  block: 'FeedItem',
  mods ({ type, size }) {
    return { ...this.__base(...arguments), type, size };
  },
  content (props) {
    return (
      <Fragment>
        <Bem elem="Container">
          <Header {...props}>
            <Bem elem="ButtonGroup" mods={{ place: 'header' }}>
              <Button type="actions" />
            </Bem>
          </Header>
          <Body {...props}>
            <Bem elem="ButtonGroup" mods={{ place: 'body' }}>
              <Button type="heart" />
            </Bem>
          </Body>
        </Bem>
      </Fragment>
    );
  }
});
