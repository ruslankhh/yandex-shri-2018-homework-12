import { decl } from 'bem-react-core';

export default decl({
  block: 'Image',
  tag: 'img',
  attrs ({ src, srcSet, alt, width, height }) {
    return { alt, width, height, src, srcSet };
  }
});
