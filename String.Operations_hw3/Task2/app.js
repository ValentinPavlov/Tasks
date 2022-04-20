// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными
// способами (через substr, substring, slice).
const value = `aaa bbb ccc`;
console.log(`substr - ${value.substr(4,3)}`);
console.log(`substring - ${value.substring(3,7)}`);
console.log(`slice - ${value.slice(3,7)}`);