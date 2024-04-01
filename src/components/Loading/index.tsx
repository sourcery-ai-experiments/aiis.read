import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return <CircularProgress />;
};

export const CenterLoading = () => {
  return (
    <div className="flex h-[200px] flex-col items-center justify-center space-x-2">
      <CircularProgress />
    </div>
  );
};

export default Loading;
