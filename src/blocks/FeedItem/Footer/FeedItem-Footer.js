import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Button from 'b:Button m:type=ghost';
import Icon from 'b:Icon m:type=actions m:type=heart';

import 'e:ButtonGroup m:place=footer';
import 'e:Button m:type=actions m:type=heart';

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
        <Bem elem="ButtonGroup" mods={{ place: 'footer' }}>
          <Button mods={{ type: 'ghost' }} mix={{ block: 'FeedItem', elem: 'Button', mods: { type: 'actions' } }}>
            <Icon mods={{ type: 'actions' }}></Icon>
          </Button>
          <Button mods={{ type: 'ghost' }} mix={{ block: 'FeedItem', elem: 'Button', mods: { type: 'heart' } }}>
            <Icon mods={{ type: 'heart' }}></Icon>
          </Button>
        </Bem>
      </Fragment>
    );
  }
});
