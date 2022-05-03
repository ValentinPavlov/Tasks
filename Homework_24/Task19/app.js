let side1 = +prompt(`Введите сторону 1`);
let side2 = +prompt(`Введите сторону 2`);
let side3 = +prompt(`Введите сторону 3`);
if (side1 > 0 && side2 > 0 && side3 > 0) {
    if ((side1 + side2 + side3) / 3 === side1) {
        console.log(`Равносторонний`);
    } else if (side1 === side2 && side1 != side3 || side1 === side3 && side1 != side2 || side3 === side2 && side3 != side2) {
        console.log(`Равнобедренный`);
    } else console.log(`Разносторонний`);
} else console.log(`Сторона не может быть отрицательной`);