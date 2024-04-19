import browser from 'webextension-polyfill';

import store from '../app/store';
import { isDev } from '../shared/utils';

store.subscribe(() => {
  console.log('state', store.getState());
});

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    console.log('插件首次安装');
    // chrome.tabs // 查询所有活动的标签页
    //   .query({ active: true, currentWindow: true }, (tabs) => {
    //     // 获取当前活动标签页
    //     const activeTab = tabs[0];

    //     if (activeTab) {
    //       // 发送消息到 Content 脚本
    //       chrome.tabs.sendMessage(
    //         activeTab.id ?? 0,
    //         { greeting: 'Hello from background on install' },
    //         (response) => {
    //           console.log('Received response from content script:', response);
    //         }
    //       );
    //     }
    //   });

    //show the welcome page
    const url = browser.runtime.getURL(isDev ? 'src/welcome/welcome.html' : 'welcome.html'); // TODO: better approach
    await browser.tabs.create({ url });
  } else if (details.reason === 'update') {
    // 插件更新时执行脚本
    console.log('插件更新');
  }
});

// 监听插件即将停止或卸载的事件
chrome.runtime.onSuspend.addListener(() => {
  console.log('Extension is being suspended or uninstalled.');

  // 在插件卸载时执行一些代码
  // 例如，清理数据、释放资源或记录日志等
  performCleanupTasks();
});

// 定义一个清理任务的函数
function performCleanupTasks() {
  console.log('Performing cleanup tasks...');

  // 在这里执行需要的清理操作
  // 例如，清理本地存储、关闭打开的连接等
  clearLocalStorage();
}

// 定义一个函数来清理本地存储
function clearLocalStorage() {
  // 使用 chrome.storage API 清理本地存储
  // chrome.storage.local.clear(() => {});
  localStorage.removeItem('xfans-user-config');
}

export {};
