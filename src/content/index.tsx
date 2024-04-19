import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from '@eduardoac-skimlinks/webext-redux';

import { proxyStore as store } from '../app/proxyStore';
import useGlobalStore from '../store/useGlobalStore';

import { addTwitterComponent, addUserPagePriceComponent } from './addToTwitterHome';
import Content from './Content';

import '../tailwind.css';

withProxyStore(<Content />, store).then((component) => {
  const container = document.createElement('div');
  container.id = 'xfans-root';
  document.body.append(container);
  createRoot(container).render(component);

  function whereIsUser(): string {
    // 获取当前页面的 URL
    const currentUrl = window.location.href.toLowerCase();
    const urlWordLength = currentUrl.split('/').length;
    const lastWord = currentUrl.split('/')[urlWordLength - 1];

    const doNotCheckPathList = ['notifications', 'messages', 'i'];
    // 判断当前页面的 URL 是否符合一般的用户主页 URL 格式
    if (currentUrl.includes('https://twitter.com/') && urlWordLength === 4 && lastWord === 'home') {
      return 'home';
    } else if (urlWordLength === 4 && !doNotCheckPathList.includes(lastWord)) {
      return 'userPage';
    } else {
      return 'unknown';
    }
  }

  // 延迟执行的代码 3000毫秒后执行，即3秒
  setTimeout(() => {
    setInterval(() => {
      // 使用示例
      const userIsOnProfilePage = whereIsUser();
      const { token } = useGlobalStore.getState();
      if (!token) return;

      if (userIsOnProfilePage === 'home') {
        addTwitterComponent();
      } else if (userIsOnProfilePage === 'userPage') {
        addTwitterComponent();
        addUserPagePriceComponent();
      }
    }, 1000); // 每秒执行一次

    // 也可以根据需要设置 clearInterval
    // clearInterval(intervalId);
  }, 3000);
});

async function withProxyStore(children: ReactElement, proxyStore: Store): Promise<ReactElement> {
  return proxyStore.ready().then(() => {
    return <Provider store={proxyStore}>{children}</Provider>;
  });
}
