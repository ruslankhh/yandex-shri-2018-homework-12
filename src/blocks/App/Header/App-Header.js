import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Container from 'b:Container m:center';
import Logo from 'e:Logo';
import image from '../Logo/App-Logo.png';
import image2 from '../Logo/App-Logo@2x.png';
import image3 from '../Logo/App-Logo@3x.png';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content () {
    const imageSet = `${image2} 2x, ${image3} 3x`;

    return (
      <Fragment>
        <Container center>
          <Logo src={image} srcSet={imageSet} alt="Logo" />
        </Container>
      </Fragment>
    );
  }
});
