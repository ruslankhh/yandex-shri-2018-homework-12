import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Button from 'b:Button m:type=ghost';
import Icon from 'b:Icon m:type=actions';

import 'e:ButtonGroup m:place=header';
import 'e:Button m:type=actions';

export default decl({
  block: 'FeedItem',
  elem: 'Header',
  tag: 'header',
  content (props) {
    const { title, titleColor, href = '#' } = props;

    return (
      <Fragment>
        <Bem elem="TitleContainer">
          <Bem elem="Title" tag="a" href={href} style={{ color: titleColor }}>{title}</Bem>
        </Bem>
        <Bem elem="ButtonGroup" mods={{ place: 'header' }}>
          <Button mods={{ type: 'ghost' }} mix={{ block: 'FeedItem', elem: 'Button', mods: { type: 'actions' } }}>
            <Icon mods={{ type: 'actions' }}></Icon>
          </Button>
        </Bem>
      </Fragment>
    );
  }
});
