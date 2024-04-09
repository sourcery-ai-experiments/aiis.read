import * as React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import {
  XFANS_TWITTER_GO_FOLLOW,
  XFANS_TWITTER_GO_FOLLOW_VERIFY,
  LOCALSTORAGE_FALSE,
} from '../../constants';
import * as toaster from '../../components/Toaster';
import {
  XFANS_CONTENT_WIDTH,
  XFANS_MIN_WIDTH,
  XFANS_TWITTER_CONTENT_WIDTH,
  XFANS_TWITTER_OFFSET,
} from '../../constants';
import { ProfileData } from '../../service/login/me';
import { TwitterOauth2Data } from '../../service/login/twiterOuth2';
import http, { ResultData } from '../../service/request';
import useGlobalStore, { PageType } from '../../store/useGlobalStore';
import Profile from '../../welcome/Profile';
import Wallet from '../../welcome/Wallet';
import ProfileModal from '../../welcome/Wallet/Profile';
import CongratulationPage from '../loginPage/congratulationPage';
import InvitePage from '../loginPage/invitePage';
import SignInWithXPage from '../loginPage/signInWithXPage';

import LogoButton from './logoButton';

import '../../tailwind.css';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
  drawerWidth?: number; // 添加 width 参数
}>(({ theme, open, drawerWidth }) => ({
  // flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -(drawerWidth || 0),
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

export default function PersistentDrawerRight() {
  const { isShowDrawer, goPage, page, logout } = useGlobalStore((state) => ({ ...state }));

  const [loginLoading, setLoginLoading] = React.useState(false);

  const handleDrawerOpen = () => {
    useGlobalStore.setState({
      isShowDrawer: true,
    });
  };

  const handleDrawerClose = () => {
    useGlobalStore.setState({
      isShowDrawer: false,
    });
  };

  const caculateDrawerWidth = () => {
    return Math.max(
      (window.innerWidth - XFANS_TWITTER_CONTENT_WIDTH) / 2 + XFANS_TWITTER_OFFSET,
      XFANS_MIN_WIDTH
    );
  };

  const caculateBackWidth = () => {
    return caculateDrawerWidth() - XFANS_CONTENT_WIDTH;
  };

  const [pageState, setPageState] = React.useState('login');

  const [drawerWidth, setDrawerWidth] = React.useState(caculateDrawerWidth());

  const [backWidth, setBackWidth] = React.useState(caculateBackWidth());

  React.useEffect(() => {
    function handleResize() {
      // 当窗口大小变化时，更新 width 的值
      setBackWidth(caculateBackWidth());
      setDrawerWidth(caculateDrawerWidth());
    }

    // 添加窗口大小变化时的事件监听器
    window.addEventListener('resize', handleResize);

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    // 再获取url中的token 作为第一优先级
    const urlParams = new URLSearchParams(window.location.search);
    const xfansToken = urlParams.get('xfans_token');
    if (xfansToken) {
      // 登录看是否有效，拿到 invite 状态
      useGlobalStore.setState({ token: xfansToken });
      checkProfileData();
    } else {
      // 获取 xfans_token 参数的值
      const localStorageToken = useGlobalStore.getState().token;
      if (localStorageToken && localStorageToken.length > 0) {
        // 已经有 token 的情况，登录判断 invite 状态
        useGlobalStore.setState({ token: localStorageToken });
        checkProfileData();
      }
    }

    // 检查xfans写入localStorage的twitterid跟twitter写在cookie里的twitterid是否匹配，不匹配则退出登录
    // 针对登出或者切换账号的情况
    setInterval(() => {
      const userInfo = useGlobalStore.getState().userInfo;
      if (userInfo && userInfo?.twitterId && userInfo?.twitterId?.length > 0) {
        // 读取所有的 cookie
        const cookies = document.cookie;
        // 将获取的 cookie 字符串转换为对象形式
        const cookieObj = Object.fromEntries(
          cookies.split(';').map((cookie) => cookie.trim().split('='))
        );
        const cookieTwid = decodeURIComponent(cookieObj.twid)?.split('=')?.[1];
        if (userInfo?.twitterId !== cookieTwid) {
          logout();
        }
      }
    }, 1000);
  }, []);

  const checkProfileData = async () => {
    // https://test-xfans-api.d.buidlerdao.xyz/api/user/me
    const profileData = (await http.get(`/api/user/me`)) as ResultData<ProfileData>;
    if (profileData.code === 0) {
      if (profileData.data.isActive) {
        goPage(PageType.Profile);
        return 'active';
      } else if (!profileData.data.isRegistered) {
        goPage(PageType.Invite);
        return 'waiting invite code';
      } else if (!profileData.data.isTaskFinished) {
        goPage(PageType.Congratulation);
        return 'waiting task';
      } else {
        goPage(PageType.Congratulation);
        return 'waiting task';
      }
    }
    return profileData.message;
  };

  const clickLogin = async () => {
    setLoginLoading(true);

    // 跳转 login link https://test-xfans-api.d.buidlerdao.xyz/api/user/twitter-oauth2
    const link = (await http.get(`/api/user/twitter-oauth2`)) as ResultData<TwitterOauth2Data>;
    console.log(link);
    if (link.code === 0) {
      window.location.href = link.data.authorizationUrl;
    }
  };

  const clickRegisterInviteCode = async (inviteCode: string) => {
    const activateData = (await http.post(`api/user/register`, {
      inviteCode: inviteCode,
    })) as ResultData;
    if (activateData.code === 0) {
      toaster.success(toaster.ToastMessage.CONGRATULATION);
      goPage(PageType.Congratulation);
    } else {
      toaster.error(toaster.ToastMessage.INVITE_CODE_ERROR);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <ProfileModal />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerOpen}
        disableRipple
        sx={{ ...(isShowDrawer && { display: 'none' }) }}
      >
        {/* <MenuIcon className="rounded-full m-0 w-[24px] h-[24px] cursor-pointer" /> */}
        <LogoButton />
      </IconButton>
      <Main open={isShowDrawer} drawerWidth={drawerWidth}></Main>
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
        open={isShowDrawer}
      >
        <div className="flex h-full overflow-hidden">
          <div
            className={`mx-[2px] mt-[37px] flex h-[24px] flex-shrink-0 justify-end`}
            style={{
              width: backWidth,
            }}
          >
            <ChevronRightIcon
              onClick={handleDrawerClose}
              className="m-0 mr-0 w-[24px] cursor-pointer"
            />
          </div>
          <Divider orientation="vertical" flexItem />
          {page === PageType.Login && (
            <SignInWithXPage
              showLoading={loginLoading}
              handleButtonClick={() => {
                // reset follow status
                localStorage.setItem(XFANS_TWITTER_GO_FOLLOW, LOCALSTORAGE_FALSE);
                localStorage.setItem(XFANS_TWITTER_GO_FOLLOW_VERIFY, LOCALSTORAGE_FALSE);
                clickLogin();
              }}
            />
          )}
          {page === PageType.Invite && (
            <InvitePage handleButtonClick={(inviteCode) => clickRegisterInviteCode(inviteCode)} />
          )}
          {page === PageType.Congratulation && (
            <CongratulationPage goProfile={() => goPage(PageType.Profile)} />
          )}
          {page === PageType.Profile && (
            <Profile handleButtonClick={() => goPage(PageType.Wallet)} />
          )}
          {page === PageType.Wallet && (
            <Wallet back={() => goPage(PageType.Profile)} logout={logout} />
          )}
        </div>
      </Drawer>
    </Box>
  );
}
