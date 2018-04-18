import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import 'whatwg-fetch';

import Header from 'e:Header';
import Main from 'e:Main';

export default decl({
  block: 'App',
  willInit () {
    this.state = { feedItems: [] };
  },
  didMount () {
    fetch('/data/data.json')
      .then(response => response.clone().json())
      .then(data => {
        this.setState({ feedItems: data.feedItems });
      })
      .catch(err => console.warn(err));
  },
  content () {
    return (
      <Fragment>
        <Header />
        <Main feedItems={this.state.feedItems} />
      </Fragment>
    );
  }
});
