import { decl } from 'bem-react-core';

export default decl({
  block: 'Icon',
  mods ({ type }) {
    return { type };
  }
});
