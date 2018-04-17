import { decl } from 'bem-react-core';

export default decl({
  block: 'Container',
  mods ({ grid, center }) {
    return { grid, center };
  }
});
