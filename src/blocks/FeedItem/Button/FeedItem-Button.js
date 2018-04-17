import React from 'react';
import { decl } from 'bem-react-core';

import Icon from 'b:Icon m:type=actions m:type=heart';
import 'b:Button m:type=ghost';

export default decl({
  block: 'FeedItem',
  elem: 'Button',
  tag: 'button',
  attrs () {
    return { type: 'button' };
  },
  mods ({ type }) {
    return { type };
  },
  mix () {
    return { block: 'Button', mods: { type: 'ghost' } };
  },
  content ({ type }) {
    return (
      <Icon type={type}></Icon>
    );
  }
});
