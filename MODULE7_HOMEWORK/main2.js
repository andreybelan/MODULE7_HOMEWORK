/*Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного 
объекта свойство с данным именем. Функция должна возвращать true или false.*/

function func(string,obj) {                
  
  return obj.hasOwnProperty(string);  
}
var obj = {name: 'Andrey', age: 43, city: 'Khimki'};

alert(func('age',obj)); 
