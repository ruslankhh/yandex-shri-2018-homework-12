import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Button from 'b:Button m:type=ghost';
import Icon from 'b:Icon m:type=heart';

import 'e:ButtonGroup m:place=body';
import 'e:Button m:type=heart';

export default decl({
  block: 'FeedItem',
  elem: 'Body',
  content (props) {
    const { image, href = '#' } = props;
    let image2, image3, imageSet;

    if (image) {
      image2 = image.replace(/(\*.?)\.(\*.?)/g, '$1@2x.$2');
      image3 = image.replace(/(\*.?)\.(\*.?)/g, '$1@3x.$2');
      imageSet = `${image2} 2x, ${image3} 3x`;
    }

    return (
      <Fragment>
        {image ? (
          <Bem elem="ImageContainer" tag="a" href={href}>
            <Bem elem="Image" tag="img" src={image} srcSet={imageSet}></Bem>
          </Bem>
        ) : ''}
        <Bem elem="ButtonGroup" mods={{ place: 'body' }}>
          <Button mods={{ type: 'ghost' }} mix={{ block: 'FeedItem', elem: 'Button', mods: { type: 'heart' } }}>
            <Icon mods={{ type: 'heart' }}></Icon>
          </Button>
        </Bem>
      </Fragment>
    );
  }
});
