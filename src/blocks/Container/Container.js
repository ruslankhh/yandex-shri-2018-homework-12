import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Grid from 'e:Grid';

export default decl({
  block: 'Container',
  mods (props) {
    return props.mods;
  },
  content (props) {
    const { children, mods } = props;

    return (
      <Fragment>
        {mods.grid ? (
          <Grid>
            {children}
          </Grid>
        ) : children}
      </Fragment>
    );
  }
});
