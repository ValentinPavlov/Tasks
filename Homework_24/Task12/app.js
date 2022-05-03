const age = +prompt(`Введите возраст`);
if (age <= 0) console.log(`Вероятно, Вы еще не родились`);
else if (age > 0 && age <= 13) console.log(`Детство`);
else if (age > 13 && age <= 24) console.log(`Молодость`);
else if (age > 24 && age <= 59) console.log(`Зрелость`);
else console.log(`Старость`);