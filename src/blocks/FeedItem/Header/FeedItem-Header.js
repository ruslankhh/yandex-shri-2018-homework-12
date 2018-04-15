import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Control m:place=header';
import 'e:ControlItem m:type=actions';

export default decl({
  block: 'FeedItem',
  elem: 'Header',
  tag: 'header',
  content (props) {
    const { title, titleColor } = props;

    return (
      <Fragment>
        <Bem elem="TitleContainer">
          <Bem elem="Title" style={{ color: titleColor }}>{title}</Bem>
          <Bem elem="Control" mods={{ place: 'header' }}>
            <Bem elem="ControlItem" mods={{ type: 'actions' }}></Bem>
          </Bem>
        </Bem>
      </Fragment>
    );
  }
});
