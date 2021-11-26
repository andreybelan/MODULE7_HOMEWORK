/*Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все
ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

let avto = {
  brand: 'Ford',
  year: '2021',
  color:'yellow',
  passengers: 4
}

function printObj(arg) {
for (let [key, value] of Object.entries(arg)) {
  console.log(`${key}: ${value}`);
}
}

printObj(avto)