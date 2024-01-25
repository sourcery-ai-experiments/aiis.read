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

  // 延迟执行的代码 3000毫秒后执行，即3秒
  // setTimeout(() => {
  //   const thirdElement = document.querySelectorAll(
  //     '#react-root > div > div > div > main > div > div > div > div > div > div > div'
  //   )[3];

  //   // 现有元素的处理逻辑
  //   const targetElements = thirdElement.querySelectorAll('section > div > div > div');
  //   targetElements.forEach(function (element, index) {
  //     // const htmlElement = element as HTMLElement;
  //     const anchorElements = element.querySelectorAll('a');
  //     const hrefs = Array.from(anchorElements).map((anchor) => anchor.href);
  //     console.log('Element ' + (index + 1) + ' links: ', hrefs);
  //   });
  // }, 3000);

  // 首先，找到你想要监听的父元素
  setTimeout(() => {
    // const parentElement = document.querySelector(
    //   '#react-root > div > div > div > main > div > div > div > div > div > div > div'
    // )[3] as Element;

    const parentElement = document.querySelectorAll(
      '#react-root > div > div > div > main > div > div > div > div > div > div > div'
    )[3];

    // 修改选择器以确保它指向你想要观察的确切节点
    const targetElements = parentElement.querySelectorAll(
      'section > div > div > div'
    ) as NodeListOf<Element>;

    console.log(targetElements);

    // 遍历每个目标节点，为每个节点创建一个 MutationObserver
    targetElements.forEach((targetElement) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          console.log(mutation.type);
          // 检查是否有新的子节点被添加
          if (mutation.type === 'childList') {
            // 遍历新添加的节点
            mutation.addedNodes.forEach((node) => {
              const element = node as Element;
              console.log(element);
              if (element.nodeType === Node.ELEMENT_NODE) {
                // 在新添加的 div 中插入你的自定义 div
                const anchorElements = element.querySelectorAll('a');
                const hrefs = Array.from(anchorElements).map((anchor) => anchor.href);
                const newDiv = document.createElement('div');
                newDiv.id = hrefs[2];
                newDiv.textContent = 'Your custom content';
                element.appendChild(newDiv);
                console.log('added element');
              }
            });
          }
        });
      });

      // 开始观察当前目标节点的变化
      observer.observe(targetElement, {
        childList: true,
        subtree: true,
      });
    });
  }, 3000);

  // 当你不再需要监听时，可以停止观察
  // observer.disconnect();
});

async function withProxyStore(children: ReactElement, proxyStore: Store): Promise<ReactElement> {
  return proxyStore.ready().then(() => {
    return <Provider store={proxyStore}>{children}</Provider>;
  });
}
