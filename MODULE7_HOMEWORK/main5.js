/*Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
•	Имена классов, свойств и методов должны быть информативными;
•	Соблюдать best practices;
•	Использовать синтаксис ES6*/

function Electronics(color, elecName, requiredPower) { 
  this.color = color,
  this.name = elecName,
  this.requiredPower = requiredPower,
  this.turnPowerOn = function(){
    console.log(`Power ${elecName} is on.`)
  }
}

Electronics.prototype.turnPowerOff = function(){       
} 

class Tv extends Electronics {   
  constructor(color, elecName, requiredPower, diagonal) {
    super(color, elecName, requiredPower),   
    this.diagonal = diagonal   
  }
}

const TvSet  = new Tv('black','TvSet', 100, 32);  
TvSet.turnPowerOn(TvSet);             

class Notebook extends Electronics {   
  constructor(color, elecName, requiredPower) {
  super(color, elecName, requiredPower),    
  this.turnWifiOn = function(){   
    console.log(`Wi-fi ${elecName} is on now.`)
    }
  }
}

const notebookLG  = new Notebook('grey','notebookLG', 250);
notebookLG.turnWifiOn(notebookLG);
console.log(`Sum requiredpower is: ${notebookLG['requiredPower'] + TvSet['requiredPower']} watts.`);


