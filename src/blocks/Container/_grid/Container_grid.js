import React from 'react';
import { declMod } from 'bem-react-core';

import Grid from 'e:Grid';

export default declMod({ grid: true }, {
  block: 'Container',
  mods ({ grid, center }) {
    return { ...this.__base(...arguments), grid, center };
  },
  content ({ children }) {
    return <Grid>{children}</Grid>;
  }
});
