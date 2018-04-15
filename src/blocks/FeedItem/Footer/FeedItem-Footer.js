import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Control m:place=footer';
import 'e:ControlItem m:type=actions m:type=heart';

export default decl({
  block: 'FeedItem',
  elem: 'Footer',
  tag: 'footer',
  content (props) {
    const { description, channelName } = props;

    return (
      <Fragment>
        <Bem elem="DescriptionContainer">
          <Bem elem="Description">
            <Bem elem="DescriptionText">{description}</Bem>
          </Bem>
        </Bem>
        <Bem elem="ChannelName">{channelName}</Bem>
        <Bem elem="Control" mods={{ place: 'footer' }}>
          <Bem elem="ControlItem" mods={{ type: 'actions' }}></Bem>
          <Bem elem="ControlItem" mods={{ type: 'heart' }}></Bem>
        </Bem>
      </Fragment>
    );
  }
});
