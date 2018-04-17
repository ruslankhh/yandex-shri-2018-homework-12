import { decl } from 'bem-react-core';

export default decl({
  block: 'FeedItem',
  mods ({ size, type }) {
    return { size, type };
  }
});
