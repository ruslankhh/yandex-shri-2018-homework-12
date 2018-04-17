import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  elem: 'Body',
  content (props) {
    const { children, image, href = '#' } = props;
    let image2, image3, imageSet;

    if (image) {
      image2 = image.replace(/(\*.?)\.(\*.?)/g, '$1@2x.$2');
      image3 = image.replace(/(\*.?)\.(\*.?)/g, '$1@3x.$2');
      imageSet = `${image2} 2x, ${image3} 3x`;
    }

    return (
      <Fragment>
        <Bem elem="ImageContainer" tag="a" href={href}>
          <Bem elem="Image" tag="img" src={image} srcSet={imageSet}></Bem>
        </Bem>
        {children}
      </Fragment>
    );
  }
});
