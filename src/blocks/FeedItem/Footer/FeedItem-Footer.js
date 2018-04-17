import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Footer',
  tag: 'footer',
  content (props) {
    const { children, type, description, channelName } = props;

    return (
      <Fragment>
        <Bem elem="DescriptionContainer">
          <Bem elem="Description">
            <Bem elem="DescriptionText">{description}</Bem>
          </Bem>
        </Bem>
        {type === 'text' ? (
          <Bem elem="ChannelName">{channelName}</Bem>
        ) : ''}
        {children}
      </Fragment>
    );
  }
});
