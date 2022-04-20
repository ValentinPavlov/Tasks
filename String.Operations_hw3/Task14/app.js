let names_input = prompt(`Введите Имя и Фамилию`);
let name_arr = names_input.split(" ");

if (name_arr[0].charAt(0).toUpperCase() == name_arr[0].charAt(0) && name_arr[1].charAt(0).toUpperCase() == name_arr[1].charAt(0)) {
    console.log(Yes);
} else {
    console.log(No);
}