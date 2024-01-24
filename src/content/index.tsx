import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from '@eduardoac-skimlinks/webext-redux';

import { proxyStore as store } from '../app/proxyStore';

import Content from './Content';

withProxyStore(<Content />, store).then((component) => {
  const container = document.createElement('my-extension-root');
  document.body.append(container);
  createRoot(container).render(component);

  // 延迟执行的代码
  setTimeout(() => {
    const thirdElement = document.querySelectorAll(
      '#react-root > div > div > div > main > div > div > div > div > div > div > div'
    )[3];

    // 创建 MutationObserver 实例并传入回调函数
    // const observer = new MutationObserver((mutationsList, observer) => {
    //   mutationsList.forEach((mutation) => {
    //     if (mutation.type === 'childList') {
    //       mutation.addedNodes.forEach((node) => {
    //         // 确保 node 是一个 Element 类型
    //         if (node.nodeType === Node.ELEMENT_NODE) {
    //           const elementNode = node as Element;
    //           const newAnchorElements = elementNode.querySelectorAll('a');

    //           // 遍历并获取 href 属性
    //           const newHrefs = Array.from(newAnchorElements).map((anchor) => {
    //             // 明确 anchor 是 HTMLAnchorElement 类型
    //             return (anchor as HTMLAnchorElement).href;
    //           });

    //           // 处理新的 hrefs
    //           console.log('New hrefs:', newHrefs);
    //         }
    //       });
    //     }
    //   });
    // });

    // 开始观察 thirdElement 的子元素
    // observer.observe(thirdElement, { childList: true });

    // 现有元素的处理逻辑
    const targetElements = thirdElement.querySelectorAll('section > div > div > div');
    targetElements.forEach(function (element, index) {
      // const htmlElement = element as HTMLElement;
      const anchorElements = element.querySelectorAll('a');
      const hrefs = Array.from(anchorElements).map((anchor) => anchor.href);
      console.log('Element ' + (index + 1) + ' links: ', hrefs);
    });
  }, 3000); // 3000毫秒后执行，即3秒
});

async function withProxyStore(children: ReactElement, proxyStore: Store): Promise<ReactElement> {
  return proxyStore.ready().then(() => {
    return <Provider store={proxyStore}>{children}</Provider>;
  });
}
