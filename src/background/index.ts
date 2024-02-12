import browser, { Runtime } from 'webextension-polyfill';

import { translateBaiduAPI } from '../../utils/plugins/baiduTranslate';
import store from '../app/store';
import { isDev } from '../shared/utils';

store.subscribe(() => {
  console.log('state', store.getState());
});

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    //show the welcome page
    const url = browser.runtime.getURL(isDev ? 'src/welcome/welcome.html' : 'welcome.html');
    await browser.tabs.create({ url });
  }
});

interface TranslateMessage {
  action: 'translate';
  payload: {
    text: string;
    from: string;
    to: string;
  };
}

const messageHandlers = {
  async openUrls(urls: string[], { tab }: Runtime.MessageSender) {
    for (const [i, url] of urls.entries()) {
      void browser.tabs.create({
        url,
        index: tab!.index + i + 1,
        active: false,
      });
    }
  },
  async closeTab(_: any, { tab }: Runtime.MessageSender) {
    void browser.tabs.remove(tab!.id!);
  },
  async fetch(url: string) {
    const response = await fetch(url);
    return response.text();
  },
  async fetchJSON(url: string) {
    const response = await fetch(url);
    return response.json();
  },
  async openOptionsPage() {
    return browser.runtime.openOptionsPage();
  },
  async getStyleHotfixes() {
    return 0;
  },
  // They must return a promise to mark the message as handled
};

// browser.runtime.onMessage.addListener(
//   (message: typeof messageHandlers, sender): Promise<unknown> | void => {
//     for (const id of objectKeys(message)) {
//       if (id in messageHandlers) {
//         return messageHandlers[id](message[id], sender);
//       }
//     }
//   }
// );

browser.runtime.onMessage.addListener(
  (message: TranslateMessage, sender: Runtime.MessageSender): Promise<unknown> | void => {
    console.log('-------------');
    console.log('-----message.action--------', message.action);
    if (message.action === 'translate') {
      console.log('-------------');
      console.log('-----message.action--------');
      const { text, from, to } = message.payload;

      return translateGoogleAPI(text, from, to)
        .then((translation) => {
          // sendResponse({ translation });
          console.log(translation);
          return translation;
        })
        .catch((error) => {
          console.log(error);
          // sendResponse({ error: error.message });
        });
    }
  }
);

async function translateGoogleAPI(_text: string, _from: string, _to: string): Promise<string> {
  // Your translation logic using fetch or other methods
  // ...

  // For example, you can return the translation
  const translation = 'Translated text12'; // Replace with your actual translation
  return translation;
}

// ...其他代码...
export {};
