/*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.
План:
1.	Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
2.	Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
3.	У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
4.	Создать экземпляры каждого прибора;
5.	Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:
1.	Имена функций, свойств и методов должны быть информативными
2.	Соблюдать best practices:
•	использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
•	информативные имена (а не a, b);
•	четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
•	использование синтаксиса es6 (кроме функции-конструкторов) и т.д.*/

function Electronika(color, elecName, requiredPower) { 
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){                         
  console.log(`Power ${elecName} is on.`)
  }
}

Electronika.prototype.turnPowerOff = function(){       
  console.log(`Power ${elecName} is off.`)
} 

function wifiEnabled(color, elecName, requiredPower, wifiEnable) {        
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.wifiEnable = wifiEnable
}

wifiEnabled.prototype = new Electronika();   

let televisionSet = new Electronika('black', 'televisionSet', 120); 

televisionSet.turnPowerOn(televisionSet); 

let notebook = new wifiEnabled('grey', 'notebook', 100, true); 
console.log(`Overall required power is: ${televisionSet['requiredPower'] + notebook['requiredPower']}`);