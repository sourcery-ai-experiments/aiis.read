import React, { ReactElement, useEffect } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import http, { ResultData } from '../service/request';
import useGlobalStore from '../store/useGlobalStore';

import PersistentDrawerRight from './drawer';

const Content = (): ReactElement => {
  const { message, messageType, messageOpen, closeMessage } = useGlobalStore((state) => ({
    ...state,
  }));
  console.log(message);

  useEffect(() => {
    http.get('/api/share/trades', {
      trader: '123',
      subject: '123',
    });
    // fetch('https://test-xfans-api.d.buidlerdao.xyz/api/share/trades')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={messageOpen}
        onClose={closeMessage}
        message={message}
        key={message}
      />
    </div>
  );
};

export default Content;
