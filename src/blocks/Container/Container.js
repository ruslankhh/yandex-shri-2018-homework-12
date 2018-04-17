import { decl } from 'bem-react-core';

export default decl({
  block: 'Container',
  mods ({ grid, align }) {
    return { grid, align };
  }
});
