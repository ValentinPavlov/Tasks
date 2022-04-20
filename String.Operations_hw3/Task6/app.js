// Дана строка 'я учу javascript!'.
// 1. Найдите количество символов в этой строке.
// 2. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами
// (через substr, substring, slice).
// 3. Найдите позицию подстроки 'учу'.

const value = 'я учу javascript!';
console.log(`lenght - \`${value.length}\``);
console.log(`substr - \`${value.substr(2,3)}\` \`${value.substr(6,11)}\` `);
console.log(`substring - \`${value.substring(2,5)}\` \`${value.substring(6,17)}\` `);
console.log(`slice - \`${value.slice(2,5)}\` \`${value.substring(6,17)}\` `);
console.log(`позиция подстроки 'учу' - ${value.indexOf('учу')}`);