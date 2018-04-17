import { decl } from 'bem-react-core';

import 'b:Image';

export default decl({
  block: 'FeedItem',
  elem: 'Image',
  tag: 'img',
  attrs ({ src, srcSet, alt, width, height }) {
    return { alt, width, height, src, srcSet };
  },
  mix () {
    return { block: 'Image' };
  }
});
