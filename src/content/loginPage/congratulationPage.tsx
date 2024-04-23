import React, { FC, useEffect } from 'react';

import { NextButton, VerifyButton } from '../../components/buttons/loginButton';
import * as toaster from '../../components/Toaster';
import {
  XFANS_CHECK_RETWEET,
  XFANS_DONE,
  XFANS_GO,
  XFANS_TWITTER_HOMEPAGE,
  XFANS_TWITTES,
  XFANS_VERIFY,
} from '../../constants';
import http, { ResultData } from '../../service/request';
import useGlobalStore from '../../store/useGlobalStore';

import '../../tailwind.css';
interface CongratulationPageProps {
  goProfile: () => void; // 定义一个函数类型的属性
}

const CongratulationPage: FC<CongratulationPageProps> = ({ goProfile }) => {
  const { isGoFollow, isGoFollowVerify, isGoRetwittes, isGoRetwittesVerify } = useGlobalStore(
    (state) => ({
      ...state,
    })
  );

  const followStatus =
    isGoFollow === true ? (isGoFollowVerify === true ? XFANS_DONE : XFANS_VERIFY) : XFANS_GO;
  const retweetStatus =
    isGoRetwittes === true ? (isGoRetwittesVerify === true ? XFANS_DONE : XFANS_VERIFY) : XFANS_GO;
  const startStatus = followStatus === XFANS_DONE && retweetStatus === XFANS_DONE;

  // 打开一个新的标签页并访问指定网页
  const openNewTab = (url: string) => {
    const newTab = window.open(url, '_blank');
    newTab?.focus();
  };

  // 再获取url中的token 作为第一优先级
  const urlParams = new URLSearchParams(window.location.search);
  const xfansCheckRetweet = urlParams.get(XFANS_CHECK_RETWEET);

  const checkTasksStatus = async (toast: boolean) => {
    try {
      const activateData = (await http.post2(`api/user/activate/check-task`, toast)) as ResultData;
      if (activateData.code === 0 && activateData.data.finished === true) {
        useGlobalStore.setState({
          isGoRetwittesVerify: true,
        });
      } else {
        if (!xfansCheckRetweet) {
          useGlobalStore.setState({
            isGoRetwittes: false,
          });
        } else {
          useGlobalStore.setState({
            isGoRetwittes: true,
          });
        }
        useGlobalStore.setState({
          isGoRetwittesVerify: false,
        });
      }
    } catch (error) {
      if (!xfansCheckRetweet) {
        useGlobalStore.setState({
          isGoRetwittes: false,
        });
      } else {
        useGlobalStore.setState({
          isGoRetwittes: true,
        });
      }
      useGlobalStore.setState({
        isGoRetwittesVerify: false,
      });
    }
  };

  useEffect(() => {
    if (!xfansCheckRetweet) {
      checkTasksStatus(false);
    }
  }, []);

  return (
    <div className="h-full min-h-screen w-full items-center justify-center text-center">
      <p className="mt-[81px] mb-[44px] text-center text-[32px] font-bold leading-[38px] text-[#0F1419]">
        Congratulations!
      </p>
      <p className="mb-[21px] text-center text-[14px] font-normal leading-[24px] text-[#5B7083]">
        To activate your account, please complete the following tasks. Note that data updates may
        take a 1-2 minute delay. If verification does not occur immediately, please be patient and
        wait.
      </p>
      <div className="flex px-[58px]">
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.201305H7.09819L13.6592 8.98639L21.8261 0L23.7666 0.0335508L14.6267 10.2502L24 22.7987H16.9046L10.712 14.612L3.14694 23H1.2374L9.77267 13.4153L0 0.201305ZM6.42888 1.49866H2.6801L17.678 21.4678H21.3593L6.42888 1.49866Z"
            fill="#121516"
          />
        </svg>
        <p className="mx-[16px] mb-[21px] w-[207px] text-center text-[16px] font-medium leading-[24px] text-[#000]">
          Follow @xFans on X
        </p>
        <VerifyButton
          variant="contained"
          disableElevation
          disabled={followStatus === XFANS_DONE}
          onClick={() => {
            switch (followStatus) {
              case XFANS_GO:
                openNewTab(XFANS_TWITTER_HOMEPAGE);
                useGlobalStore.setState({
                  isGoFollow: true,
                });
                break;

              case XFANS_VERIFY:
                setTimeout(() => {
                  useGlobalStore.setState({
                    isGoFollowVerify: true,
                  });
                }, 1000);
                break;

              default:
                break;
            }
          }}
        >
          {followStatus}
        </VerifyButton>
      </div>
      <div className="mb-[44px] flex px-[58px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.49987 0.879883L8.93187 5.01988L7.56787 6.47988L5.49987 4.54988V12.9999C5.49987 14.0999 6.39587 14.9999 7.49987 14.9999H12.9999V16.9999H7.49987C5.29087 16.9999 3.49987 15.2099 3.49987 12.9999V4.54988L1.43187 6.47988L0.0678711 5.01988L4.49987 0.879883ZM16.4999 2.99988H10.9999V0.999883H16.4999C18.7089 0.999883 20.4999 2.78988 20.4999 4.99988V13.4499L22.5679 11.5199L23.9319 12.9799L19.4999 17.1199L15.0679 12.9799L16.4319 11.5199L18.4999 13.4499V4.99988C18.4999 3.89988 17.6039 2.99988 16.4999 2.99988Z"
            fill="#333333"
          />
        </svg>

        <p className="mx-[16px] mb-[21px] w-[207px] text-center text-[16px] font-medium leading-[24px] text-[#000]">
          Retweet tweets on X
        </p>
        <VerifyButton
          variant="contained"
          disableElevation
          disabled={retweetStatus === XFANS_DONE}
          onClick={() => {
            switch (retweetStatus) {
              case XFANS_GO:
                useGlobalStore.setState({
                  isGoRetwittes: true,
                });
                openNewTab(XFANS_TWITTES);
                break;

              case XFANS_VERIFY:
                checkTasksStatus(true);
                break;

              default:
                break;
            }
          }}
        >
          {retweetStatus}
        </VerifyButton>
      </div>
      <NextButton
        variant="contained"
        disableElevation
        style={{
          color: '#fff',
          backgroundColor: startStatus ? '#9A6CF9' : '#B08DF6',
          borderColor: startStatus ? '#9A6CF9' : '#B08DF6',
        }}
        onClick={async () => {
          try {
            const activateData = (await http.post(`api/user/activate`)) as ResultData;
            if (activateData.code === 0) {
              goProfile();
            } else {
              toaster.error(activateData?.message ?? toaster.ToastMessage.ACTIVATE_FAILED);
            }
          } catch (error) {
            toaster.error(toaster.ToastMessage.ACTIVATE_FAILED);
          }
        }}
        disabled={!startStatus}
      >
        Start
      </NextButton>
    </div>
  );
};

export default CongratulationPage;
