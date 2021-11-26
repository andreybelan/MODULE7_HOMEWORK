/*Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.*/

const obj = {};
alert(obj.toString);

const emptyObj = Object.create(null); 
alert(emptyObj.toString); 
