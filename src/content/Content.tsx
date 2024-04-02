import React, { ReactElement } from 'react';

import Toaster from '../components/Toaster';

import PersistentDrawerRight from './drawer';

const Content = (): ReactElement => {
  return (
    <div
      id="xfans-root"
      style={{
        position: 'fixed',
        zIndex: 999,
        top: 0,
        right: 0,
      }}
    >
      <PersistentDrawerRight />
      <Toaster />
    </div>
  );
};

export default Content;
