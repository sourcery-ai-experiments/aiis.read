import React, { ReactElement } from 'react';

import PersistentDrawerRight from './drawer';

const Content = (): ReactElement => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 999,
        top: 0,
        right: 0,
      }}
    >
      <PersistentDrawerRight />
    </div>
  );
};

export default Content;
