import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const NextButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 'bold',
  padding: '10px 94px',
  borderRadius: '50px',
  lineHeight: 1.5,
  backgroundColor: '#9A6CF9',
  borderColor: '#9A6CF9',
  fontFamily: 'SF Pro Display, sans-serif',
  '&:hover': {
    backgroundColor: '#B08DF6',
    borderColor: '#B08DF6',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#9C70F4',
    borderColor: '#9C70F4',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export const VerifyButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  height: '25px',
  width: '54px',
  fontWeight: 'normal',
  borderRadius: '27px',
  lineHeight: 1,
  backgroundColor: '#2C2A2A',
  borderColor: '#2C2A2A',
  fontFamily: 'SF Pro Display, sans-serif',
  '&:hover': {
    backgroundColor: '#2C2A2A',
    borderColor: '#2C2A2A',
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <NextButton variant="contained" disableRipple>
        Bootstrap
      </NextButton>
    </Stack>
  );
}
