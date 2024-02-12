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

    const response = await fetch(apiUrl, {
      method: 'GET',
      mode: 'cors', // 不启用 CORS
      headers: {
        'Content-Type': 'application/json',
        Origin: 'https://twitter.com', // 添加 Origin 头部
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'cross-site',
      },
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`翻译请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const translation = data.trans_result[0].dst;

    return translation;
  } catch (error) {
    console.error('翻译请求失败:', error.message);
    return null;
  }
}

// 生成签名
async function generateSign(
  appId: string,
  text: string,
  salt: number,
  key: string
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${appId}${text}${salt}${key}`);

  const buffer = await crypto.subtle.digest('SHA-256', data);

  // 将 ArrayBuffer 转换为十六进制字符串
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// 例子
const textToTranslate = 'Hello, World!';
translateBaiduAPI(textToTranslate, 'en', 'zh').then((response) =>
  console.log(`翻译结果: ${response}`)
);
