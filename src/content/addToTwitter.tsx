import React from 'react';
import { createRoot } from 'react-dom/client';

import { FriendPrice } from '../components/twitterAdded/feedsPage/ethIcon';
import { VoteTwitter } from '../components/twitterAdded/feedsPage/voteIcon';

export const addPriceComponent = (element: Element, tweetId: string) => {
  const priceContainer = document.createElement('div');
  const specificElement = element.querySelector(
    'article > div > div > div:nth-child(2) > div:nth-child(1)'
  );

  if (specificElement) {
    const root = createRoot(priceContainer);
    root.render(
      <div id={`xfans-price-${tweetId}`}>
        <FriendPrice price={0.1} />
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
