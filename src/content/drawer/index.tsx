import * as React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';

import InvitePage from '../loginPage/invitePage';
import LoginPage from '../loginPage/signInWithXPage';
import SignInWithXPage from '../loginPage/signInWithXPage';

import '../../tailwind.css';

const drawerWidth = 463;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  // flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  /**
   * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
   * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
   * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
   * proper interaction with the underlying content.
   */
  position: 'relative',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [pageState, setPageState] = React.useState('login');

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        disableRipple
        sx={{ ...(open && { display: 'none' }) }}
      >
        <MenuIcon className="rounded-full m-0 w-[24px] h-[24px] cursor-pointer" />
      </IconButton>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className="flex h-full">
          <div className="h-[24px] w-[24px] mt-[37px] mx-[2px]">
            <ChevronRightIcon onClick={handleDrawerClose} className="m-0 w-[24px] cursor-pointer" />
          </div>
          <Divider orientation="vertical" flexItem />
          {pageState === 'login' && (
            <SignInWithXPage handleButtonClick={() => setPageState('invite')} />
          )}
          {pageState === 'invite' && (
            <InvitePage handleButtonClick={() => setPageState('invite')} />
          )}
        </div>
        <Divider />
      </Drawer>
    </Box>
  );
}
