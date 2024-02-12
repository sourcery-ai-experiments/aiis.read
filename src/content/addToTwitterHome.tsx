import React from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';

import { translateBaiduAPI } from '../../utils/plugins/baiduTranslate';
import { detectLanguage } from '../../utils/plugins/checkLanguage';
import { translateGoogleAPI } from '../../utils/plugins/googleTranslate';
import { FriendPrice } from '../components/twitterAdded/feedsPage/ethIcon';
import { VoteTwitter } from '../components/twitterAdded/feedsPage/voteIcon';
import { UserPagePrice } from '../components/twitterAdded/twitterPage/userEthIcon';

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
      const sholdTranslateElements = element.querySelectorAll('article > div');
      addTranslations(sholdTranslateElements[0], [], String(index));
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

// 发送翻译请求
function requestTranslation(text: string, fromLang: string, toLang: string): void {
  browser.runtime
    .sendMessage({
      action: 'translate',
      payload: {
        text: text,
        from: fromLang,
        to: toLang,
      },
    })
    .then((response) => console.log(response));
}

function getTextNodes(node: Node, nodes: Node[] = []): Node[] {
  if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
    nodes.push(node);
  } else {
    for (const child of Array.from(node.childNodes)) {
      getTextNodes(child, nodes);
    }
  }
  return nodes;
}

export const addTranslations = (node: Node, nodes?: Node[], initId?: string): string[] => {
  function isNumeric(str: string): boolean {
    return /^\d+$/.test(str);
  }

  function checkString(input: string): boolean {
    const regex = /^[\d.,!?;:-\s]+$/;
    return regex.test(input);
  }

  const textNodes = getTextNodes(node, nodes);

  let index = 0;
  const nodeTexts: string[] = [];
  const nodeTextsIdList: string[] = [];

  // 找到所有节点中的文字并插入 node 新节点
  for (const textNode of textNodes) {
    const textContent = textNode.textContent || '';
    const text = textContent.trim();
    const translatedText = 'eaf-translated-node-' + index;
    const translatedTextId = `translate-${initId}-${String(index)}`;
    nodeTextsIdList.push(translatedTextId);

    // 检查是否已添加过相同 id 的节点
    if (document.getElementById(translatedTextId)) {
      continue;
    }

    if (
      text.length === 0 ||
      text.length === 1 ||
      checkString(textContent) ||
      ['nil'].includes(text) ||
      (textNode.parentNode instanceof Element && textNode.parentNode.tagName === 'BUTTON')
    ) {
      continue;
    }

    if (
      isNumeric(textContent) ||
      textContent.startsWith('/r/') ||
      textContent.startsWith('/u/') ||
      textContent.startsWith('r/') ||
      textContent.startsWith('u/') ||
      textContent.startsWith('level ') ||
      textContent.endsWith(' ago') ||
      [
        'give award',
        'award',
        'share',
        'reply',
        'cc',
        'comment as',
        'posted by',
        'op',
        'report',
        'save',
        'follow',
      ].includes(text.toLowerCase()) ||
      textContent.length < 5 ||
      textContent.split(' ').length < 5 ||
      (textNode.parentNode instanceof Element &&
        textNode.parentNode.classList.contains('button')) ||
      (textNode.parentNode instanceof Element &&
        textNode.parentNode.classList.contains('icon-comment'))
    ) {
      continue;
    }

    if (detectLanguage(textContent) === 'zh') {
      continue;
    }

    const translatedTextNode = document.createTextNode('translated-code');
    let translatedNode: HTMLElement;

    if (textContent.length < 18) {
      translatedNode = document.createElement('span');
    } else {
      translatedNode = document.createElement('div');
    }

    // 设置节点的 id
    translatedNode.id = translatedTextId;

    translatedNode.appendChild(translatedTextNode);
    translatedNode.classList.add('eaf-translated');
    translatedNode.classList.add(translatedText);

    if (textNode.parentNode) {
      textNode.parentNode.insertBefore(translatedNode, textNode.nextSibling);
    }

    nodeTexts.push(textContent);

    index++;
  }
  // console.log(nodeTexts);
  // translateBaiduAPI('hello world', 'en', 'zh');
  requestTranslation('hello world', 'en', 'zh');

  // translateGoogleAPI('hello world', 'en', 'zh');
  // 翻译 nodeTexts 并获取列表
  // const useTranslatedText = nodeTexts.join(' ||||| ');
  // translateBaiduAPI(useTranslatedText, 'en', 'zh').then((res) => {
  //   if (!res) return;
  //   const translatesList = res.split('|||||');
  //   // 检查是否已添加过相同 id 的节点
  //   // 找到所有节点中的文字并插入 node 新节点
  //   for (let i = 0; i < nodeTextsIdList.length; i++) {
  //     const translatedTextId = nodeTextsIdList[i];
  //     const translatedIdNode = document.getElementById(translatedTextId);
  //     if (translatedIdNode) {
  //       if (translatedIdNode.innerText !== '' && translatedIdNode.innerText !== 'translated-code') {
  //         continue;
  //       } else {
  //         translatedIdNode.innerHTML = translatesList[index];
  //       }
  //     }
  //   }
  // });

  return nodeTexts;
};
