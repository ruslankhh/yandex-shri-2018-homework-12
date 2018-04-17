import { decl } from 'bem-react-core';

export default decl({
  block: 'Link',
  tag: 'a',
  attrs ({ tabIndex, title, href, target, disabled }) {
    return { tabIndex, title, href, target, disabled };
  }
});
