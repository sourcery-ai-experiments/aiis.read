import axios from 'axios';

export async function translateBaiduAPI(
  text: string,
  from: string,
  to: string,
  appID = '20180422000149033',
  key = 'YvTJXd5FH31c3lB9_1sO'
): Promise<string | null> {
  const salt = Date.now();

  try {
    const sign = await generateSign(appID, text, salt, key);

    const apiUrl = `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${encodeURIComponent(
      text
    )}&from=${from}&to=${to}&appid=${appID}&salt=${salt}&sign=${sign}`;
    console.log(apiUrl);

    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Sec-Fetch-Mode': 'no-cors',
        'Access-Control-Allow-Origin': 'https://twitter.com', // 添加 Origin 头部
      },
    });

    if (response.status !== 200) {
      console.error(`Translation request failed: ${response.status} ${response.statusText}`);
      throw new Error(`Translation request failed: ${response.status} ${response.statusText}`);
    }

    const translation = response.data.trans_result[0].dst;
    return translation;
  } catch (error) {
    console.error('Translation request failed:', error.message);
    return null;
  }
}

// Generate the signature
async function generateSign(
  appId: string,
  text: string,
  salt: number,
  key: string
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${appId}${text}${salt}${key}`);

  const buffer = await crypto.subtle.digest('SHA-256', data);

  // Convert ArrayBuffer to hexadecimal string
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// Example
const textToTranslate = 'Hello, World!';
translateBaiduAPI(textToTranslate, 'en', 'zh').then((response) =>
  console.log(`Translation result: ${response}`)
);
