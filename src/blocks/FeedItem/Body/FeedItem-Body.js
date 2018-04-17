import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Image from 'e:Image';

export default decl({
  block: 'FeedItem',
  elem: 'Body',
  content (props) {
    const { children, title, image, href = '#' } = props;
    let image2, image3, imageSet;

    if (image) {
      image2 = image.replace(/(\*.?)\.(\*.?)/g, '$1@2x.$2');
      image3 = image.replace(/(\*.?)\.(\*.?)/g, '$1@3x.$2');
      imageSet = `${image2} 2x, ${image3} 3x`;
    }

    return (
      <Fragment>
        <Bem elem="ImageContainer" tag="a" href={href}>
          <Image src={image} srcSet={imageSet} alt={title} />
        </Bem>
        {children}
      </Fragment>
    );
  }
});
