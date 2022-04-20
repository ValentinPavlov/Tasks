// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru.
// Формат входных данных
// На вход программе подается строка текста.
// Формат выходных данных
// Программа должна вывести «YES» если введенная строка заканчивается
// подстрокой .com или .ru и «NO» в противном случае.
// Sample Input 1:
// www.google.com
// Sample Output 1:
// YES
// Sample Input 3:
// www.yandex.by
// Sample Output 3:
// NO

const x = prompt(`Введите строку`).toLowerCase();
if (x.endsWith(`.com`) || x.endsWith(`.ru`)) {
    console.log(`YES`);
} else console.log(`NO`);