import React, { ReactElement } from 'react';

import Toaster from '../components/Toaster';
import { useTweetRewardStage } from '../service/tweet';

import PersistentDrawerRight from './drawer';

const Content = (): ReactElement => {
  useTweetRewardStage();

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
      <Toaster />
    </div>
  );
};

export default Content;
