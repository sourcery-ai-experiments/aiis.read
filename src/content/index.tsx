import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from '@eduardoac-skimlinks/webext-redux';

import { proxyStore as store } from '../app/proxyStore';

import { addPriceComponent, addVoteComponent } from './addToTwitter';
import Content from './Content';

const addTwitterComponent = () => {
  const thirdElement = document.querySelectorAll(
    '#react-root > div > div > div > main > div > div > div > div > div > div > div'
  )[3];

  // 现有元素的处理逻辑
  const targetElements = thirdElement.querySelectorAll('section > div > div > div');
  targetElements.forEach(function (element, index) {
    const anchorElements = element.querySelectorAll('a');
    const hrefs = Array.from(anchorElements).map((anchor) => anchor.href);
    const twitterUrlString = hrefs[hrefs.length - 1];
    if (twitterUrlString !== undefined) {
      const urlObject = new URL(twitterUrlString);
      const pathSegments = urlObject.pathname.split('/');
      const username = pathSegments[1];
      const tweetId = pathSegments[3];

      // 判断是否存在已经插入的元素
      const existingPriceElement = document.getElementById('xfans-price-' + tweetId);
      const existingVoteElement = document.getElementById('xfans-vote-' + tweetId);

      if (!existingPriceElement) {
        addPriceComponent(element, tweetId);
      } else {
        // console.log('Element already exists for tweetId:', tweetId);
      }

      if (!existingVoteElement) {
        addVoteComponent(element, tweetId, username);
      } else {
        // console.log('Element already exists for tweetId:', tweetId);
      }
    }
  });
};

withProxyStore(<Content />, store).then((component) => {
  const container = document.createElement('my-extension-root');
  document.body.append(container);
  createRoot(container).render(component);

  // 延迟执行的代码 3000毫秒后执行，即3秒
  setTimeout(() => {
    setInterval(() => {
      addTwitterComponent();
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
