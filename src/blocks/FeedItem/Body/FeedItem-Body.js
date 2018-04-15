import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Control m:place=body';
import 'e:ControlItem m:type=heart';

export default decl({
  block: 'FeedItem',
  elem: 'Body',
  content (props) {
    const { image } = props;
    let image2, image3, imageSet;

    if (image) {
      image2 = image.replace(/(\*.?)\.(\*.?)/g, '$1@2x.$2');
      image3 = image.replace(/(\*.?)\.(\*.?)/g, '$1@3x.$2');
      imageSet = `${image2} 2x, ${image3} 3x`;
    }

    return (
      <Fragment>
        {image ? (
          <Bem elem="ImageContainer">
            <Bem elem="Image" tag="img" src={image} srcSet={imageSet}></Bem>
          </Bem>
        ) : ''}
        <Bem elem="Control" mods={{ place: 'body' }}>
          <Bem elem="ControlItem" mods={{ type: 'heart' }}></Bem>
        </Bem>
      </Fragment>
    );
  }
});
