import { decl } from 'bem-react-core';

export default decl({
  block: 'Button',
  tag: 'button',
  mods ({ mods }) {
    return mods;
  }
});
