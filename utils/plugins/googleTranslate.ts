import axios from 'axios';

export async function translateGoogleAPI(
  text: string,
  from: string,
  to: string
): Promise<string | null> {
  try {
    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(
      text
    )}`;

    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      console.error(`Translation request failed: ${response.status} ${response.statusText}`);
      throw new Error(`Translation request failed: ${response.status} ${response.statusText}`);
    }

    const translation = response.data[0][0][0];
    return translation;
  } catch (error) {
    console.error('Translation request failed:', error.message);
    return null;
  }
}

// Example
const textToTranslate = 'Hello, World!';
translateGoogleAPI(textToTranslate, 'en', 'zh').then((response) =>
  console.log(`Translation result: ${response}`)
);
