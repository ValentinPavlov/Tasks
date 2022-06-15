//Задача 10.На вход подается строка в виде url. Необходимо
// прописать регулярное выражение для данной строки. Если же строка 
// подходит под наше регулярное выражение, то вывести булевое true,
//  в противном случае бросить исключение и его обработать. 

const dataParse = JSON.parse(`[1,2,3,4]`);

const checkOfArray = (array) => {
    if (typeof array === "object") return true;
    else throw new Error(`Not an Object`)
}

const checkOfNumbers = (array) => {
        let countOfError = 0;
        for (let i of array) {
            (!isNaN(key)) ? true: ++countOfError;
        }
        if (countOfError === 0) {
            return true;
        } else {
            throw new Error (`Это строка`)
        }
    }
        const checkOfNumberInArray = (array) => {
            let newArray = [];
            let boolOfNumbers = checkOfNumbers(array)
            let boolOfArray = checkOfArray(array)
            if (boolOfArray === true && boolOfNumbers === true) {
                for (let i of array) {
                    if (!isNaN(i)) {
                        (i % 2 === 0) ? newArray.push(i): null;
                    }
                }
            }
            return newArray;
        };
        console.log(checkOfNumberInArray(dataParse));