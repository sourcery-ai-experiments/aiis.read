import React, { ReactElement } from 'react';

import Profile from './Profile';

const Welcome = (): ReactElement => {
  return (
    <div className="flex h-screen justify-center">
      <Profile />
    </div>
  );
};

export default Welcome;
