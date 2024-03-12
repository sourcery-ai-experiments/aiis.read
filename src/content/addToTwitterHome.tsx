import React from 'react';
import { createRoot } from 'react-dom/client';

import { FriendPrice } from '../components/twitterAdded/feedsPage/ethIcon';
import { VoteTwitter } from '../components/twitterAdded/feedsPage/voteIcon';
import { UserPagePrice } from '../components/twitterAdded/twitterPage/userEthIcon';

export const addPriceComponent = (element: Element, tweetId: string, twitterUsername: string) => {
  const priceContainer = document.createElement('div');
  const specificElement = element.querySelector(
    'article > div > div > div:nth-child(2) > div:nth-child(1)'
  );

  if (specificElement) {
    const root = createRoot(priceContainer);
    root.render(
      <div id={`xfans-price-${tweetId}`}>
        <FriendPrice twitterUsername={twitterUsername} />
      </div>
    );
    specificElement.appendChild(priceContainer);
  }
};

export const addVoteComponent = (element: Element, tweetId: string, userName: string) => {
  const voteContainer = document.createElement('div');
  const specificElement = element.querySelector(
    'article > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div'
  );

  if (specificElement) {
    const root = createRoot(voteContainer);
    root.render(
      <div id={`xfans-vote-${tweetId}`}>
        <VoteTwitter twitterId={tweetId} userName={userName} />
      </div>
    );
    specificElement.appendChild(voteContainer);
  } else {
    // 如果不存在图文， div:nth-child(4) 便不存在，选在 div:nth-child(3) 的位置插入
    const specificElement2 = element.querySelector(
      'article > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div'
    );
    if (specificElement2) {
      const root = createRoot(voteContainer);
      root.render(
        <div id={`xfans-vote-${tweetId}`} style={{ zIndex: 99 }}>
          <VoteTwitter twitterId={tweetId} userName={userName} />
        </div>
      );
      specificElement2.appendChild(voteContainer);
    }
  }
};

export const addTwitterComponent = () => {
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
        addPriceComponent(element, tweetId, username);
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

export const addUserPagePriceComponent = () => {
  // 获取当前页面的 URL
  const currentUrl = window.location.href.toLowerCase();
  const username = currentUrl.split('/')[currentUrl.split('/').length - 1];
  const elementId = `xfans-userPagePrice-${username}`;
  const existingElement = document.getElementById(elementId);

  // 如果元素已经存在，则不执行后续操作
  if (existingElement) {
    return;
  }

  const priceContainer = document.createElement('span');

  // Update XPath based on your structure
  const xpath = `/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div[1]/div[2]/div[1]/div/div[1]/div/div/span/span[2]`;

  const specificElement = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue as Element;

  if (specificElement) {
    const root = createRoot(priceContainer);
    // root.render(<span id={elementId}>1</span>);
    root.render(<UserPagePrice price={'1222'} id={elementId} />);
    // root.render();
    specificElement.appendChild(priceContainer);
  }
};
