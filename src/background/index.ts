import browser from 'webextension-polyfill';

import store from '../app/store';
import { isDev } from '../shared/utils';

store.subscribe(() => {
  console.log('state', store.getState());
});

let firstInstall = false;

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    console.log('extension first install');
    firstInstall = true;

    //show the welcome page
    const url = browser.runtime.getURL(isDev ? 'src/welcome/welcome.html' : 'welcome.html'); // TODO: better approach
    await browser.tabs.create({ url });
  } else if (details.reason === 'update') {
    // 插件更新时执行脚本
    console.log('extension update');
  }
});

// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'content_script_loaded') {
    console.log('Content script loaded ');
    if (firstInstall == true) {
      firstInstall = false;
      chrome.tabs // 查询所有活动的标签页
        .query({ active: true, currentWindow: true }, (tabs) => {
          // 获取当前活动标签页
          const activeTab = tabs[0];

          if (activeTab) {
            // 发送消息到 Content 脚本, 处理首次安装的事物
            chrome.tabs.sendMessage(
              activeTab.id ?? 0,
              { greeting: 'Please do task while first install' },
              (response) => {
                console.log('Received response from content script:', response);
              }
            );
          }
        });
    }
  }
});

// 监听插件即将停止或卸载的事件
chrome.runtime.onSuspend.addListener(() => {
  console.log('Extension is being suspended or uninstalled.');
});

export {};
