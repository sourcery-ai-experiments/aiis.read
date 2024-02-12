import { franc } from 'franc';

export function detectLanguage(text: string): string {
  try {
    const result = franc(text);
    console.log(text, result);

    // 如果检测到语言，返回语言，否则返回 "unknown"
    return result && result !== 'und' ? result : 'unknown';
  } catch (error) {
    console.error('Language detection failed:', error.message);
    return 'unknown';
  }
}

// Example
// const textToDetect = 'Hello, World!';
// const detectedLanguage = detectLanguage(textToDetect);
// console.log(`Detected Language: ${detectedLanguage}`);
